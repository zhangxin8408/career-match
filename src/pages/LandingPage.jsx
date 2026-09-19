import { motion } from 'framer-motion'
import { SparklesIcon, ChartBarIcon, UserGroupIcon } from '@heroicons/react/24/outline'

const features = [
  {
    icon: SparklesIcon,
    title: '智能测评',
    description: '基于专业心理学量表，科学分析你的职业性格倾向'
  },
  {
    icon: ChartBarIcon,
    title: '深度匹配',
    description: '综合考量兴趣、能力、价值观，精准匹配理想职业'
  },
  {
    icon: UserGroupIcon,
    title: '个性化建议',
    description: '根据你的测评结果，提供专属职业发展建议'
  }
]

function LandingPage({ onStart }) {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-blue-700 to-indigo-800" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-300 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold text-white mb-6"
            >
              发现你的理想职业
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto"
            >
              通过科学测评，了解你的职业性格类型，找到最适合你的职业方向
            </motion.p>
            
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              onClick={onStart}
              className="bg-white text-primary-600 px-10 py-4 rounded-full text-lg font-semibold hover:bg-blue-50 transition-all duration-300 shadow-2xl hover:shadow-white/20"
            >
              开始测评 →
            </motion.button>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-blue-200 mt-6"
            >
              约需 5-8 分钟 · 12 道专业题目
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center text-slate-800 mb-16"
          >
            为什么选择我们？
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-center p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-blue-50 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-primary-100 rounded-2xl flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center text-slate-800 mb-16"
          >
            如何开始？
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '01', title: '回答问题', desc: '完成 12 道精心设计的职业倾向问题' },
              { step: '02', title: '分析计算', desc: '系统根据你的答案生成专业分析报告' },
              { step: '03', title: '获取结果', desc: '查看你的职业匹配度和详细建议' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-center"
              >
                <div className="text-6xl font-black text-primary-200 mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-indigo-700">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-6"
          >
            准备好探索你的职业未来了吗？
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xl text-blue-100 mb-10"
          >
            数千名用户已通过我们的测评找到了理想的职业方向
          </motion.p>
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            onClick={onStart}
            className="bg-white text-primary-600 px-12 py-4 rounded-full text-lg font-semibold hover:bg-blue-50 transition-all duration-300 shadow-2xl"
          >
            立即开始测评
          </motion.button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-slate-900 text-slate-400 text-center">
        <p>© 2026 职业匹配度分析 · 帮助你找到理想职业</p>
      </footer>
    </div>
  )
}

export default LandingPage
