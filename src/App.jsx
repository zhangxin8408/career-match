import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import LandingPage from './pages/LandingPage'
import QuizPage from './pages/QuizPage'
import ResultPage from './pages/ResultPage'

function App() {
  const [currentPage, setCurrentPage] = useState('landing')
  const [answers, setAnswers] = useState([])

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={currentPage}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50"
      >
        {currentPage === 'landing' && (
          <LandingPage onStart={() => setCurrentPage('quiz')} />
        )}
        {currentPage === 'quiz' && (
          <QuizPage
            answers={answers}
            setAnswers={setAnswers}
            onBack={() => setCurrentPage('landing')}
            onSubmit={(finalAnswers) => {
              setAnswers(finalAnswers)
              setCurrentPage('result')
            }}
          />
        )}
        {currentPage === 'result' && (
          <ResultPage answers={answers} onRestart={() => setCurrentPage('landing')} />
        )}
      </motion.div>
    </AnimatePresence>
  )
}

export default App
