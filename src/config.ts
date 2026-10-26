import avatar from './assets/avatar.webp';

/** Empty fields preserve the reference layout without invented personal information. */
export const siteConfig = {
  name: 'S1mple',
  role: 'Agent / AI 应用工程师',
  description: '致力于做出真正有价值的 Agent 产品。',
  statement: '致力于做出真正有价值的 Agent 产品。',
  avatar, github: 'https://github.com/s1mple555', email: 'hfan@seu.edu.cn',
  about: [
    '我是S1mple，现就读于东南大学，专注 Agent / AI 应用工程。',
    '我以 Python 后端开发为基础，开发了学习交流社区 EasyStudy 和编程助手 E_coder。前者将社区经验转化为有来源的 RAG 回答，后者围绕工具调用、安全执行、经验复用和目标验收搭建 Agent 工作台。',
    '研究兴趣包括 AI Agent、AI for Security 与 AI Safety，致力于做出真正有价值的 Agent 产品。',
  ],
  skills: [
    { title: 'Retrieval & Memory', items: ['RAG', '长短期记忆', '多轮对话'] },
    { title: 'Agent Orchestration', items: ['Multi-Agent', '工具调用', '任务调度', '状态管理'] },
    { title: 'Runtime & Reliability', items: ['执行审批', '命令沙箱', '事件回放', '目标验收'] },
    { title: 'Backend & Research', items: ['Python', 'Agent Harness', '论文复现', '工程落地'] },
  ],
  project1: {
    name: 'EasyStudy',
    tagline: '把学习计划，变成看得见的进步。',
    summary: '面向计算机学习与求职准备的学习记录与交流社区。将目标打卡、笔记待办、好友私信和 AI 问答放在一起，支持回看个人记录与他人的成长路径。',
    site: 'https://easy-study.s1mple.top/',
    technology: ['Python / FastAPI', 'Qdrant / BGE', 'BM25 / RRF', 'Redis / Lua', 'SQLite'],
    period: '2026.08 — 2026.10',
    highlights: [
      { title: '有来源的 RAG', description: '结合多轮对话重写问题，融合 BM25 与 BGE 向量召回，关联父文档补齐上下文并提供原帖来源。' },
      { title: '缓存与请求控制', description: '缓存社区目录、前三页及置顶帖，结合版本校验；Redis + Lua 原子限流与发布幂等，处理高频请求和网络重试。' },
      { title: '权限与数据一致性', description: 'JWT、CSRF 与所有权校验保护用户数据，通过事务同步写入私信消息与会话记录。' },
    ],
    workflow: ['规划', '记录', '交流', '复盘'],
    features: [
      { id: 'overview', title: '总览', english: 'Overview', headline: '让计划、记录与交流连成一个学习过程', description: '从拆解目标开始，用笔记和打卡留下思路；遇到问题时向同伴或小E求助，再把经验沉淀下来。', src: 'images/projects/easystudy/focus-intro.webp', width: 901, height: 410, alt: 'EasyStudy 产品介绍界面局部：设定目标与阶段计划' },
      { id: 'rag', title: '小E RAG', english: 'Ask Little E', headline: '找到社区经验，也找到答案的出处', description: '结合多轮对话重写检索问题，通过 BM25 与 BGE 向量双路召回、RRF 排名融合和父文档关联补齐上下文；回答流式输出并附原帖来源，内容哈希用于同步更新和清理失效索引。', src: 'images/projects/easystudy/focus-rag.webp', width: 901, height: 410, alt: 'EasyStudy 小E问答局部：学习建议正文、引用编号和两个参考来源' },
      { id: 'notes', title: '个人笔记', english: 'Notebook', headline: '把零散知识，整理成自己的学习笔记', description: '用富文本、Markdown、代码块和待办记录知识与思路，自动保存编辑内容，让学习过程可以随时接着写、回头看。', src: 'images/projects/easystudy/focus-notes.webp', width: 821, height: 400, alt: 'EasyStudy 个人笔记局部：RAG笔记正文、知识条目和学习待办' },
      { id: 'chat', title: '交流窗口', english: 'Conversation', headline: '带着问题交流，和同伴一起向前', description: '通过好友列表与私信连接学习伙伴，围绕代码、方法和具体问题继续讨论，让学习不止是一个人的记录。', src: 'images/projects/easystudy/focus-chat.webp', width: 821, height: 400, alt: 'EasyStudy 好友交流局部：围绕RAG项目的双向聊天消息' },
      { id: 'checkin', title: '打卡发帖', english: 'Study journal', headline: '不只记录学了什么，也记录如何学会', description: '将每日打卡关联学习目标，留下进展、疑问与复盘。通过点赞、评论和收藏，让个人记录也成为可以交流的学习经验。', src: 'images/projects/easystudy/focus-checkin.webp', width: 841, height: 374, alt: 'EasyStudy 学习打卡局部：两篇关联学习目标的打卡帖子和互动' },
      { id: 'progress', title: '学习进度', english: 'Learning plan', headline: '把学习路线拆成任务，让进度一目了然', description: '用计划表格安排阶段、学习内容和时间，以状态标签、进度条与优先级追踪任务，从一张路线表开始持续推进。', src: 'images/projects/easystudy/focus-progress.webp', width: 881, height: 440, alt: 'EasyStudy 学习计划表局部：十行学习任务、彩色状态标签和进度条' },
    ],
  },
  project2: {
    name: 'E_coder',
    tagline: '让代码修改可审阅，让任务完成有依据。',
    summary: '面向本地代码开发与调试的个人编程助手。支持 Skills 按需加载、独立上下文子 Agent、会话记忆、任务状态与依赖管理、定时任务，以及基于独立验收结果持续执行的 Goal 模式。',
    technology: ['Python / FastAPI', 'Vue 3 / Vite', 'Tool Calling / Hooks', 'SQLite / SSE', 'AppContainer'],
    period: '2026.09 — 2026.10',
    github: 'https://github.com/s1mple555/E_coder',
    features: [
      {
        id: 'execution', title: '安全执行', english: 'Execution', headline: '先审阅修改，再让工具执行。',
        description: '统一注册 15 个结构化工具，通过 Pydantic 生成参数 Schema 并校验调用。Hooks 统一处理 diff 与命令审批；修改前比对原文，命令默认在 Windows AppContainer 沙箱中执行。SQLite 保存执行记录，SSE 推送模型回复与工具状态。',
        principle: '命令成功且原文件无冲突时，才将工作区差异写回。',
        steps: [
          { title: '模型提出调用', detail: '结构化参数校验，生成文件 diff 或命令预览' },
          { title: '用户审批与执行', detail: '检查原文变化，命令在沙箱副本中运行' },
          { title: '写回与记录', detail: '校验文件差异，保存执行结果供后续回看' },
        ],
      },
      {
        id: 'experience', title: '经验复用', english: 'Experience', headline: '从确认成功的任务中，留下可复用的方法。',
        description: '由用户确认任务成功，再通过独立模型请求提炼适用条件与策略，并校验引用的工具事件。经验按项目隔离存储、精确去重，后续任务通过关键词检索按需加载，支持同一项目跨会话复用。',
        principle: '经验保留来源轮次与工具证据，供用户追溯和停用。',
        steps: [
          { title: '确认成功轮次', detail: '用户确认目标完成，读取对应执行记录' },
          { title: '提炼与校验', detail: '独立请求提炼策略，验证工具事件引用并去重' },
          { title: '按需复用', detail: '在同一项目中检索相关经验，注入后续上下文' },
        ],
      },
      {
        id: 'preview', title: '界面反馈', english: 'Preview', headline: '在页面上指出问题，把反馈带回源码。',
        description: '通过 sandbox iframe 预览静态页面与前端构建产物。点击元素添加修改要求，将 DOM 选择器、文本和位置整理为结构化标注，批量提交给 Agent 定位源码并修改；入口 HTML 内容哈希用于校验标注有效性。',
        principle: '标注是源码定位线索；修改仍需审批，结果由用户预览确认。',
        steps: [
          { title: '预览与标注', detail: '选择页面元素，记录位置、文本与修改要求' },
          { title: '提交给 Agent', detail: '检查入口版本，依据标注定位实际源码' },
          { title: '修改与验收', detail: '审批后修改，刷新构建产物并由用户确认' },
        ],
      },
      {
        id: 'goal', title: '目标验收', english: 'Goal', headline: '模型准备结束时，再检查任务是否完成。',
        description: '通过 Stop Hook 发起独立、无工具的判断请求，依据命令输出和退出码等记录检查验收条件。未达标时将原因反馈给主 Agent 继续执行，遇到判断失败或执行上限则停止并保留目标，支持暂停与恢复。',
        principle: '主 Agent 的完成声明，需要执行证据支持。',
        steps: [
          { title: '设定验收条件', detail: '明确目标和约束，由主 Agent 执行与验证' },
          { title: '独立检查证据', detail: '停止时读取真实工具结果，判断目标是否达成' },
          { title: '继续或结束', detail: '未达标则反馈原因续执行，达标后结束目标' },
        ],
      },
    ],
  },
  education: [
    { school: '西安电子科技大学', period: '2022–2026', program: '网络空间安全', location: '西安', note: '成绩排名前 10%，获得推免名额，曾获国家奖学金。' },
    { school: '东南大学', period: '2026–2029', program: '网络空间安全', location: '南京', note: '硕士研究生二等奖学金' },
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
