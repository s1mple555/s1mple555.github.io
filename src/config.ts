import avatar from './assets/avatar.webp';

/** Empty fields preserve the reference layout without invented personal information. */
export const siteConfig = {
  name: 'S1mple',
  role: 'Agent / AI 应用工程师',
  description: '致力于做出真正有价值的 Agent 产品。',
  statement: '致力于做出真正有价值的 Agent 产品。',
  avatar, github: 'https://github.com/s1mple555', email: 'hfan@seu.edu.cn',
  about: [
    '我叫范赫，现就读于东南大学，专注 Agent / AI 应用工程。',
    'Python 后端开发是我的工程底座。我主导过多个 Agent 项目，从零搭建多 Agent 协作系统，覆盖 RAG、工具调用、长短期记忆与多轮对话，关注任务调度、状态管理和结果聚合。',
    '研究兴趣包括 AI Agent、AI for Security 与 AI Safety，致力于做出真正有价值的 Agent 产品。',
  ],
  skills: [
    { title: 'Retrieval & Memory', items: ['RAG', '长短期记忆', '多轮对话'] },
    { title: 'Agent Orchestration', items: ['Multi-Agent', '工具调用', '任务调度', '状态管理'] },
    { title: 'Runtime & Reliability', items: ['幻觉控制', '延迟优化', '重试机制', '降级策略'] },
    { title: 'Backend & Research', items: ['Python', 'Agent Harness', '论文复现', '工程落地'] },
  ],
  project1: {
    name: 'EasyStudy',
    tagline: '把学习计划，变成看得见的进步。',
    summary: '面向自主学习者的学习记录与交流社区。将计划、笔记、打卡和同伴交流放在一起，让分散的学习过程有处记录、进度有迹可循，经验也能被找到。',
    site: 'https://easy-study.s1mple.top/',
    technology: ['Python / FastAPI', 'SQLite', 'RAG'],
    workflow: ['规划', '记录', '交流', '复盘'],
    features: [
      { id: 'overview', title: '总览', english: 'Overview', headline: '让计划、记录与交流连成一个学习过程', description: '从拆解目标开始，用笔记和打卡留下思路；遇到问题时向同伴或小E求助，再把经验沉淀下来。', src: 'images/projects/easystudy/focus-intro.webp', width: 901, height: 410, alt: 'EasyStudy 产品介绍界面局部：设定目标与阶段计划' },
      { id: 'rag', title: '小E RAG', english: 'Ask Little E', headline: '找到社区经验，也找到答案的出处', description: '小E检索站内公开帖子与打卡内容，整理出有上下文的回答，并附上可回看的原帖来源，让散落的经验更容易被找到。', src: 'images/projects/easystudy/focus-rag.webp', width: 901, height: 410, alt: 'EasyStudy 小E问答局部：学习建议正文、引用编号和两个参考来源' },
      { id: 'notes', title: '个人笔记', english: 'Notebook', headline: '把零散知识，整理成自己的学习笔记', description: '用富文本、Markdown、代码块和待办记录知识与思路，自动保存编辑内容，让学习过程可以随时接着写、回头看。', src: 'images/projects/easystudy/focus-notes.webp', width: 821, height: 400, alt: 'EasyStudy 个人笔记局部：RAG笔记正文、知识条目和学习待办' },
      { id: 'chat', title: '交流窗口', english: 'Conversation', headline: '带着问题交流，和同伴一起向前', description: '通过好友列表与私信连接学习伙伴，围绕代码、方法和具体问题继续讨论，让学习不止是一个人的记录。', src: 'images/projects/easystudy/focus-chat.webp', width: 821, height: 400, alt: 'EasyStudy 好友交流局部：围绕RAG项目的双向聊天消息' },
      { id: 'checkin', title: '打卡发帖', english: 'Study journal', headline: '不只记录学了什么，也记录如何学会', description: '将每日打卡关联学习目标，留下进展、疑问与复盘。通过点赞、评论和收藏，让个人记录也成为可以交流的学习经验。', src: 'images/projects/easystudy/focus-checkin.webp', width: 841, height: 374, alt: 'EasyStudy 学习打卡局部：两篇关联学习目标的打卡帖子和互动' },
      { id: 'progress', title: '学习进度', english: 'Learning plan', headline: '把学习路线拆成任务，让进度一目了然', description: '用计划表格安排阶段、学习内容和时间，以状态标签、进度条与优先级追踪任务，从一张路线表开始持续推进。', src: 'images/projects/easystudy/focus-progress.webp', width: 881, height: 440, alt: 'EasyStudy 学习计划表局部：十行学习任务、彩色状态标签和进度条' },
    ],
  },
  project2: {
    name: '项目2', tagline: 'Agent Harness', intro: '',
    cards: Array.from({ length: 2 }, () => ({ label: '', title: '', description: '', outcome: '' })),
    harness: '',
  },
  education: [
    { school: '西安电子科技大学', period: '2022–2026', program: '网络空间安全', location: '西安', note: '成绩排名前 10%，获得推免名额，曾获国家奖学金。' },
    { school: '东南大学', period: '2026–2029', program: '网络空间安全', location: '南京', note: '硕士研究生一等奖学金' },
  ],
  experience: [
    {
      period: '2024.11 — 2025.07',
      title: '基于大模型的越权漏洞 PoC 自动化生成',
      bullets: [
        '基于 LangChain 搭建多 Agent 协作流程，开发 MCP 工具，实现漏洞版本校正与 PoC 生成验证。',
        '测试 800+ 个 WordPress 插件越权漏洞，版本校正准确率超 80%。',
      ],
    },
    {
      period: '2023.12 — 2024.06',
      title: 'CSIDH 方案效率优化',
      bullets: [
        '优化 Jacobi 符号计算，计算提速约 46.5%，CSIDH 方案整体效率提升 13.5%。',
        '国家级大创立项，相关论文发表于《密码学报》，获 IACR ePrint 2021/549 致谢。',
      ],
    },
  ],
  academicAwards: [
    { year: '2025', name: '全国大学生信息安全竞赛作品赛', result: '国家级二等奖', detail: '《基于差分隐私的网络侧信道攻击防护系统》' },
    { year: '2024', name: '全国密码技术竞赛', result: '国家级三等奖', detail: '《密码算法的硬件自动化防护工具》' },
  ],
  photographs: [
    { src: 'images/photography/landscape-01-preview.webp', width: 1700, height: 1280, alt: '湖面、暮色与城市天际线' },
    { src: 'images/photography/landscape-02-preview.webp', width: 1706, height: 1279, alt: '从高处眺望城市的人' },
    { src: 'images/photography/landscape-05-preview.webp', width: 1706, height: 1279, alt: '石墙与拱门' },
    { src: 'images/photography/landscape-06-preview.webp', width: 1717, height: 1279, alt: '林间升起的水雾' },
    { src: 'images/photography/landscape-08-preview.webp', width: 1585, height: 1279, alt: '画框中的山峰与树林' },
    { src: 'images/photography/landscape-09-preview.webp', width: 1706, height: 1279, alt: '夕阳映照的山坡与田野' },
    { src: 'images/photography/landscape-10-preview.webp', width: 1700, height: 1280, alt: '云层上方的机翼与晚霞' },
    { src: 'images/photography/landscape-11-preview.webp', width: 1430, height: 1024, alt: '山前的车辆与人' },
    { src: 'images/photography/landscape-12-preview.webp', width: 1832, height: 1024, alt: '云层下的群山与旷野' },
    { src: 'images/photography/landscape-13-preview.webp', width: 1440, height: 1080, alt: '公路尽头的日落' },
    { src: 'images/photography/landscape-14-preview.webp', width: 1440, height: 1080, alt: '落日下的铁路设施' },
    { src: 'images/photography/landscape-15-preview.webp', width: 1440, height: 1080, alt: '车窗上的云层倒影' },
    { src: 'images/photography/landscape-16-preview.webp', width: 1080, height: 810, alt: '旷野上空的晚霞' },
    { src: 'images/photography/landscape-17-preview.webp', width: 1438, height: 1279, alt: '街边骑行的人' },
    { src: 'images/photography/landscape-18-preview.webp', width: 1706, height: 1279, alt: '海湾中的红色大桥与沙滩' },
    { src: 'images/photography/landscape-03-preview.webp', width: 1563, height: 1279, displayRatio: 0.75, alt: '桥梁上的车流' },
    { src: 'images/photography/landscape-04-preview.webp', width: 1279, height: 1706, alt: '城市街道与远处建筑' },
    { src: 'images/photography/landscape-07-preview.webp', width: 1279, height: 1706, alt: '山坡与针叶林' },
  ],
  athletics: {
    photos: [
      { src: 'images/photography/athletics-01.webp', width: 1920, height: 1080, alt: '田径队在跑道上的毕业合照' },
      { src: 'images/photography/athletics-02.webp', width: 1830, height: 1080, alt: '队友们在西安电子科技大学队旗前合影' },
      { src: 'images/photography/athletics-03.webp', width: 1920, height: 1280, alt: '教练与队友们在田径场上的毕业合影' },
      { src: 'images/photography/athletics-04.webp', width: 1912, height: 1279, alt: '田径和马拉松比赛的奖牌与参赛证' },
    ],
    description: '2022 年加入校田径队，累计训练超 5000 公里。',
    passion: '热爱奔跑，更珍惜与队友并肩坚持的日子。',
    achievements: [
      { year: '2025.05', event: '陕西田径公开赛', result: '男子 800 米亚军' },
      { year: '2024.11', event: '陕西省大学生田径运动会', result: '男子 800 米季军' },
      { year: '2024.07', event: '全国大学生田径运动会', result: '800 米 PB 2:03.82' },
      { year: '2023.10', event: '宝鸡半程马拉松', result: '半马 PB 1:27:06' },
    ],
  },
};
interface NavigationItem { label: string; english: string; id: string; path?: string; }
export const navigation: NavigationItem[] = [
  { label: '关于', english: 'About', id: 'about' },
  { label: '项目', english: 'Projects', id: 'projects' },
  { label: '经历', english: 'Experience', id: 'experience' },
  { label: '爱好', english: 'Hobbies', id: 'hobbies' },
  { label: '帖子', english: 'Posts', id: 'posts', path: 'posts/' },
];
export const asset = (path: string) => import.meta.env.BASE_URL + path.replace(/^\/+/, '');
