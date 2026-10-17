import { fileURLToPath } from 'node:url';
import { isAbsolute, relative } from 'node:path';
import { glob, type Loader } from 'astro/loaders';

/** Astro 5's glob loader returns before registering watchers for an empty folder. */
export function markdownPostsLoader(): Loader {
  const markdown = glob({ pattern: '**/*.md', base: './src/content/posts' });
  return {
    name: 'markdown-posts-with-empty-folder-watch',
    async load(context) {
      await markdown.load(context);
      const watcher = context.watcher;
      if (!watcher || context.store.keys().length > 0) return;
      const directory = fileURLToPath(new URL('./src/content/posts/', context.config.root));
      watcher.add(directory);
      let loading = false;
      const onFirstPost = async (filename: string) => {
        const local = relative(directory, filename);
        if (loading || local.startsWith('..') || isAbsolute(local) || !local.endsWith('.md')) return;
        loading = true;
        watcher.off('add', onFirstPost);
        watcher.off('change', onFirstPost);
        try {
          await markdown.load(context);
        } catch (error) {
          context.logger.error(error instanceof Error ? error.message : String(error));
          loading = false;
          watcher.on('add', onFirstPost);
          watcher.on('change', onFirstPost);
        }
      };
      watcher.on('add', onFirstPost);
      watcher.on('change', onFirstPost);
    },
  };
}
