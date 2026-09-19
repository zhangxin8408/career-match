import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowPathIcon, ShareIcon } from '@heroicons/react/24/outline'
import { questions, careerTypes } from '../data/questions'

function calculateScores(answers) {
  const scores = { R: 0, I: 0, E: 0, S: 0, F: 0, B: 0 }
  
  answers.forEach(answer => {
    const question = questions.find(q => q.id === answer.questionId)
    if (question && question.options[answer.optionIndex]) {
      const optionScores = question.options[answer.optionIndex].scores
      Object.keys(optionScores).forEach(type => {
        scores[type] += optionScores[type]
      })
    }
  })
  
  return scores
}

function ResultPage({ answers, onRestart }) {
  const [scores, setScores] = useState({})
  const [topCareers, setTopCareers] = useState([])

  useEffect(() => {
    const calculatedScores = calculateScores(answers)
    setScores(calculatedScores)
    
    const sortedTypes = Object.entries(calculatedScores)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 3)
    
    const careers = []
    sortedTypes.forEach(([type, score]) => {
      if (careerTypes[type]) {
        careers.push({
          type,
          score,
          ...careerTypes[type]
        })
      }
    })
    setTopCareers(careers)
  }, [answers])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-8 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-slate-800 mb-4">
            你的职业匹配度报告
          </h1>
          <p className="text-slate-600 text-lg">
            根据 {answers.length} 道题目的回答，我们为你找到了最适合的职业方向
          </p>
        </motion.div>

        {/* Top Match */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-br from-primary-600 to-indigo-700 rounded-3xl p-8 text-white mb-8 shadow-2xl"
        >
          <div className="text-center">
            <div className="text-6xl mb-4">
              {topCareers[0]?.icon || '🎯'}
            </div>
            <h2 className="text-3xl font-bold mb-2">
              最佳匹配：{topCareers[0]?.name || '未确定'}型
            </h2>
            <p className="text-blue-100 text-lg mb-6">
              {topCareers[0]?.description || '根据你的回答分析中...'}
            </p>
            
            <div className="inline-flex items-center gap-2 bg-white/20 px-6 py-3 rounded-full">
              <span className="text-sm">匹配度</span>
              <div className="w-32 h-2 bg-white/30 rounded-full overflow-hidden">
                <div
                  className="h-full bg-white rounded-full"
                  style={{ width: `${Math.min(95, 60 + (topCareers[0]?.score || 0) * 5)}%` }}
                />
              </div>
              <span className="text-sm font-semibold">
                {Math.min(95, 60 + (topCareers[0]?.score || 0) * 5)}%
              </span>
            </div>
          </div>
        </motion.div>

        {/* Career Recommendations */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {topCareers.map((career, index) => (
            <motion.div
              key={career.type}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-4xl mb-4">{career.icon}</div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">
                {career.name}型
              </h3>
              <div className="text-primary-600 font-semibold mb-4">
                匹配度 {Math.min(95, 60 + career.score * 5)}%
              </div>
              <ul className="space-y-2">
                {career.careers.slice(0, 4).map((c, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                    <span className="text-primary-500 mt-1">•</span>
                    {c}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Detailed Scores */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="bg-white rounded-2xl p-8 shadow-lg mb-8"
        >
          <h3 className="text-2xl font-bold text-slate-800 mb-6">
            详细分析
          </h3>
          
          <div className="space-y-4">
            {Object.entries(scores)
              .sort((a, b) => b[1] - a[1])
              .map(([type, score]) => (
                <div key={type} className="flex items-center gap-4">
                  <span className="text-2xl w-10">
                    {careerTypes[type]?.icon || '❓'}
                  </span>
                  <span className="w-24 font-medium text-slate-700">
                    {careerTypes[type]?.name || type}
                  </span>
                  <div className="flex-1 h-3 bg-slate-100 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-primary-500 to-indigo-500 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${(score / Math.max(...Object.values(scores))) * 100}%` }}
                      transition={{ duration: 0.8, delay: 0.8 }}
                    />
                  </div>
                  <span className="w-12 text-right text-slate-600 font-semibold">
                    {score}
                  </span>
                </div>
              ))}
          </div>
        </motion.div>

        {/* Advice Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 border border-amber-200 mb-8"
        >
          <h3 className="text-2xl font-bold text-slate-800 mb-4">
            💡 职业建议
          </h3>
          <div className="prose prose-lg text-slate-700">
            <p className="mb-4">
              根据你的测评结果，你最适合的职业方向是<strong>{topCareers[0]?.name || '综合'}型</strong>相关的职业。
              这类职业通常需要你发挥<strong>{topCareers[0]?.description || '个人优势'}</strong>。
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>关注{topCareers[0]?.name || '相关'}领域的行业动态和发展机会</li>
              <li>培养与该职业类型匹配的核心技能和素质</li>
              <li>寻找能够提供成长空间和施展才华的平台</li>
              <li>保持学习热情，不断提升专业竞争力</li>
            </ul>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <div className="flex justify-center gap-4">
          <button
            onClick={onRestart}
            className="flex items-center gap-2 px-8 py-4 bg-primary-600 text-white rounded-full font-semibold hover:bg-primary-700 transition-colors shadow-lg"
          >
            <ArrowPathIcon className="w-5 h-5" />
            重新测评
          </button>
          <button
            className="flex items-center gap-2 px-8 py-4 bg-white text-slate-700 rounded-full font-semibold hover:bg-slate-50 transition-colors shadow-lg border border-slate-200"
          >
            <ShareIcon className="w-5 h-5" />
            分享结果
          </button>
        </div>
      </div>
    </div>
  )
}

export default ResultPage
