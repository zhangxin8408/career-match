export const questions = [
  {
    id: 1,
    text: '在工作或学习中，你更倾向于：',
    options: [
      { text: '独自完成专注的任务', scores: { I: 2, R: 1 } },
      { text: '与他人协作交流', scores: { E: 2, S: 1 } },
      { text: '既喜欢独处也享受团队', scores: { F: 1, B: 1 } }
    ]
  },
  {
    id: 2,
    text: '面对问题时，你通常：',
    options: [
      { text: '用逻辑和分析解决问题', scores: { R: 2, I: 1 } },
      { text: '依靠直觉和经验判断', scores: { S: 2, F: 1 } },
      { text: '与他人讨论寻求建议', scores: { E: 2, S: 1 } }
    ]
  },
  {
    id: 3,
    text: '你最理想的的工作环境是：',
    options: [
      { text: '安静、独立的空间', scores: { I: 2, R: 1 } },
      { text: '活跃、充满互动的氛围', scores: { E: 2, S: 1 } },
      { text: '灵活、有创造力的环境', scores: { F: 2, B: 1 } }
    ]
  },
  {
    id: 4,
    text: '在团队中，你通常扮演什么角色？',
    options: [
      { text: '执行者，确保任务完成', scores: { R: 2, S: 1 } },
      { text: '协调者，促进团队合作', scores: { E: 2, F: 1 } },
      { text: '创新者，提出新想法', scores: { I: 1, F: 2 } }
    ]
  },
  {
    id: 5,
    text: '你对以下哪种活动最感兴趣？',
    options: [
      { text: '数据分析、技术研究', scores: { R: 2, I: 1 } },
      { text: '人际交往、团队管理', scores: { E: 2, S: 1 } },
      { text: '创意设计、艺术创作', scores: { F: 2, B: 1 } }
    ]
  },
  {
    id: 6,
    text: '面对压力时，你更倾向于：',
    options: [
      { text: '冷静分析，寻找解决方案', scores: { R: 2, I: 1 } },
      { text: '寻求他人支持和鼓励', scores: { E: 2, S: 1 } },
      { text: '先处理情绪再面对问题', scores: { F: 2, B: 1 } }
    ]
  },
  {
    id: 7,
    text: '你更喜欢的工作节奏是：',
    options: [
      { text: '规律、稳定、可预测', scores: { R: 2, S: 1 } },
      { text: '灵活、多变、有挑战', scores: { E: 1, F: 2 } },
      { text: '自主安排，自由度高', scores: { I: 1, B: 2 } }
    ]
  },
  {
    id: 8,
    text: '在职业规划中，你最看重：',
    options: [
      { text: '专业发展和技术成长', scores: { R: 2, I: 1 } },
      { text: '成就感和影响力', scores: { E: 2, S: 1 } },
      { text: '工作与生活的平衡', scores: { F: 1, B: 2 } }
    ]
  },
  {
    id: 9,
    text: '你更喜欢哪种学习方式？',
    options: [
      { text: '自学研究、深入钻研', scores: { I: 2, R: 1 } },
      { text: '课堂学习、与他人讨论', scores: { E: 2, S: 1 } },
      { text: '实践操作、边做边学', scores: { S: 2, F: 1 } }
    ]
  },
  {
    id: 10,
    text: '如果你可以自由选择职业，你会：',
    options: [
      { text: '选择能发挥专业优势的工作', scores: { R: 2, I: 1 } },
      { text: '选择能与人建立联系的工作', scores: { E: 2, S: 1 } },
      { text: '选择能表达创意的工怵', scores: { F: 2, B: 1 } }
    ]
  },
  {
    id: 11,
    text: '在做重要决定时，你更依赖：',
    options: [
      { text: '客观数据和事实', scores: { R: 2, I: 1 } },
      { text: '个人价值观和感受', scores: { F: 2, B: 1 } },
      { text: '他人的意见和经验', scores: { E: 2, S: 1 } }
    ]
  },
  {
    id: 12,
    text: '你理想的工作成果是：',
    options: [
      { text: '完成高质量的专业项目', scores: { R: 2, I: 1 } },
      { text: '帮助团队取得成功', scores: { E: 2, S: 1 } },
      { text: '创造出有价值的作品', scores: { F: 2, B: 1 } }
    ]
  }
]

export const careerTypes = {
  R: {
    name: '现实型',
    icon: '🔧',
    careers: [
      '工程师（机械/电气/土木）',
      '技术人员',
      '运动员',
      '建筑师',
      '程序员',
      '数据分析师'
    ],
    description: '喜欢动手操作，专注于具体任务的完成，注重实效和技术能力。'
  },
  I: {
    name: '研究型',
    icon: '🔬',
    careers: [
      '科学家',
      '研究员',
      '医生',
      '分析师',
      '软件工程师',
      '数据科学家'
    ],
    description: '热爱思考和研究，善于分析问题，追求知识和创新。'
  },
  E: {
    name: '企业型',
    icon: '💼',
    careers: [
      '企业家',
      '经理',
      '销售人员',
      '律师',
      '市场总监',
      '项目经理'
    ],
    description: '善于领导和说服，追求成就和影响，具有商业头脑。'
  },
  S: {
    name: '社会型',
    icon: '🤝',
    careers: [
      '教师',
      '心理咨询师',
      '护士',
      '社会工作者',
      '人力资源',
      '客户服务'
    ],
    description: '乐于助人，擅长沟通，关注他人的成长和发展。'
  },
  F: {
    name: '艺术型',
    icon: '🎨',
    careers: [
      '设计师',
      '作家',
      '音乐家',
      '摄影师',
      '艺术家',
      '创意总监'
    ],
    description: '富有创造力和想象力，追求美和自我表达。'
  },
  B: {
    name: '传统型',
    icon: '📋',
    careers: [
      '会计',
      '行政人员',
      '秘书',
      '金融分析师',
      '文员',
      '质量保证'
    ],
    description: '注重细节和规范，善于组织和处理数据，追求稳定和准确。'
  }
}
