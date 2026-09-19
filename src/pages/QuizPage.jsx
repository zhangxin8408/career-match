import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeftIcon, CheckCircleIcon } from '@heroicons/react/24/outline'
import { questions } from '../data/questions'

function QuizPage({ answers, setAnswers, onBack, onSubmit }) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedOption, setSelectedOption] = useState(null)

  const handleOptionSelect = (optionIndex) => {
    setSelectedOption(optionIndex)
  }

  const handleNext = () => {
    if (selectedOption !== null) {
      const newAnswers = [...answers, { questionId: questions[currentQuestion].id, optionIndex: selectedOption }]
      setAnswers(newAnswers)
      
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1)
        setSelectedOption(null)
      } else {
        onSubmit(newAnswers)
      }
    }
  }

  const handlePrev = () => {
    if (currentQuestion > 0) {
      const prevAnswers = answers.filter(a => a.questionId !== questions[currentQuestion].id)
      setAnswers(prevAnswers)
      setCurrentQuestion(currentQuestion - 1)
      setSelectedOption(null)
    } else {
      onBack()
    }
  }

  const progress = ((currentQuestion + 1) / questions.length) * 100

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-8 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={handlePrev}
            className="flex items-center gap-2 text-slate-600 hover:text-primary-600 transition-colors"
          >
            <ArrowLeftIcon className="w-5 h-5" />
            {currentQuestion === 0 ? '返回首页' : '上一题'}
          </button>
          
          <div className="text-slate-600 font-medium">
            第 {currentQuestion + 1} / {questions.length} 题
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-primary-500 to-indigo-500"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        {/* Question Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-3xl shadow-xl p-8 mb-8"
          >
            <h2 className="text-2xl font-bold text-slate-800 mb-8">
              {questions[currentQuestion].text}
            </h2>

            <div className="space-y-4">
              {questions[currentQuestion].options.map((option, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: selectedOption === index ? 1 : 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleOptionSelect(index)}
                  className={`w-full text-left p-5 rounded-2xl border-2 transition-all duration-200 ${
                    selectedOption === index
                      ? 'border-primary-500 bg-primary-50 shadow-md'
                      : 'border-slate-200 hover:border-primary-300 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      selectedOption === index
                        ? 'bg-primary-500 text-white'
                        : 'bg-slate-200 text-slate-600'
                    }`}>
                      {selectedOption === index ? (
                        <CheckCircleIcon className="w-5 h-5" />
                      ) : (
                        <span className="font-semibold">{String.fromCharCode(65 + index)}</span>
                      )}
                    </div>
                    <span className={`text-lg ${selectedOption === index ? 'text-primary-700 font-medium' : 'text-slate-700'}`}>
                      {option.text}
                    </span>
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Next Button */}
        <div className="flex justify-end">
          <button
            onClick={handleNext}
            disabled={selectedOption === null}
            className={`px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 ${
              selectedOption !== null
                ? 'bg-primary-600 text-white hover:bg-primary-700 shadow-lg hover:shadow-xl'
                : 'bg-slate-200 text-slate-400 cursor-not-allowed'
            }`}
          >
            {currentQuestion === questions.length - 1 ? '查看结果' : '下一题'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default QuizPage
