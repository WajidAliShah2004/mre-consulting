import SEO from '../../components/common/SEO';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaCheckCircle, FaClipboardList, FaRocket, FaChartLine } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ReadinessAssessment = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [results, setResults] = useState<any>(null);

  const questions = [
    {
      category: 'Technology Infrastructure',
      question: 'How would you rate your current technology infrastructure?',
      options: [
        { text: 'Outdated systems, manual processes', score: 1 },
        { text: 'Basic digital tools, some automation', score: 2 },
        { text: 'Modern systems with good integration', score: 3 },
        { text: 'Advanced tech stack with automation', score: 4 }
      ]
    },
    {
      category: 'Data Management',
      question: 'How organized and accessible is your business data?',
      options: [
        { text: 'Scattered across multiple systems', score: 1 },
        { text: 'Centralized but not well organized', score: 2 },
        { text: 'Well organized with some analytics', score: 3 },
        { text: 'Fully integrated with real-time insights', score: 4 }
      ]
    },
    {
      category: 'Process Efficiency',
      question: 'How efficient are your current business processes?',
      options: [
        { text: 'Highly manual with many bottlenecks', score: 1 },
        { text: 'Some automation but inefficient', score: 2 },
        { text: 'Streamlined with moderate automation', score: 3 },
        { text: 'Highly optimized and automated', score: 4 }
      ]
    },
    {
      category: 'Team Readiness',
      question: 'How ready is your team for digital transformation?',
      options: [
        { text: 'Resistant to change, low tech skills', score: 1 },
        { text: 'Open but needs significant training', score: 2 },
        { text: 'Adaptable with moderate tech skills', score: 3 },
        { text: 'Eager to adopt new technologies', score: 4 }
      ]
    },
    {
      category: 'Budget & Resources',
      question: 'What resources can you allocate for AI/automation?',
      options: [
        { text: 'Very limited budget and time', score: 1 },
        { text: 'Small budget, limited resources', score: 2 },
        { text: 'Moderate budget and resources', score: 3 },
        { text: 'Significant investment ready', score: 4 }
      ]
    }
  ];

  const handleAnswer = (score: number) => {
    setAnswers({ ...answers, [currentStep]: score });
    
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      calculateResults({ ...answers, [currentStep]: score });
    }
  };

  const calculateResults = (finalAnswers: Record<number, number>) => {
    const totalScore = Object.values(finalAnswers).reduce((sum, score) => sum + score, 0);
    const maxScore = questions.length * 4;
    const percentage = (totalScore / maxScore) * 100;

    let readinessLevel = '';
    let recommendation = '';
    let nextSteps: string[] = [];

    if (percentage >= 75) {
      readinessLevel = 'High Readiness';
      recommendation = 'Your business is well-positioned for AI and automation implementation. You have the infrastructure, processes, and team readiness to move forward quickly.';
      nextSteps = [
        'Schedule a strategy session to identify high-impact automation opportunities',
        'Begin with a pilot project in your strongest area',
        'Develop a comprehensive digital transformation roadmap'
      ];
    } else if (percentage >= 50) {
      readinessLevel = 'Moderate Readiness';
      recommendation = 'Your business has a solid foundation but needs some preparation before full-scale implementation. Focus on addressing gaps in key areas.';
      nextSteps = [
        'Conduct a detailed technology audit',
        'Invest in team training and change management',
        'Start with small automation wins to build momentum',
        'Upgrade critical infrastructure components'
      ];
    } else if (percentage >= 25) {
      readinessLevel = 'Early Stage';
      recommendation = 'Your business would benefit from foundational improvements before implementing advanced automation. Focus on building the basics first.';
      nextSteps = [
        'Assess and upgrade your technology infrastructure',
        'Implement basic process documentation',
        'Build team awareness and buy-in for digital transformation',
        'Start with simple automation tools'
      ];
    } else {
      readinessLevel = 'Foundation Building';
      recommendation = 'Your business needs significant preparation before automation implementation. Start with fundamental improvements to create a strong foundation.';
      nextSteps = [
        'Develop a digital transformation strategy',
        'Invest in basic technology infrastructure',
        'Focus on process standardization and documentation',
        'Build team digital literacy through training'
      ];
    }

    setResults({
      totalScore,
      maxScore,
      percentage,
      readinessLevel,
      recommendation,
      nextSteps
    });
  };

  const resetAssessment = () => {
    setCurrentStep(0);
    setAnswers({});
    setResults(null);
  };

  return (
    <>
      <SEO
        title="AI Readiness Assessment | MRECAI"
        description="Assess your business readiness for AI and automation. Free assessment tool to identify opportunities and gaps."
        canonical="/tools/readiness-assessment"
      />

      <div className="pt-20 min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <section className="section-padding">
          <div className="container-custom max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center px-4 py-2 bg-primary-100 rounded-full text-primary-700 text-sm font-semibold mb-6">
                <FaClipboardList className="mr-2" />
                Free Assessment Tool
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                AI Readiness <span className="gradient-text">Assessment</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover how ready your business is for AI and automation implementation
              </p>
            </motion.div>

            {!results ? (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100"
              >
                {/* Progress Bar */}
                <div className="mb-8">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-semibold text-gray-700">
                      Question {currentStep + 1} of {questions.length}
                    </span>
                    <span className="text-sm font-semibold text-primary-600">
                      {Math.round(((currentStep + 1) / questions.length) * 100)}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
                    />
                  </div>
                </div>

                {/* Question */}
                <div className="mb-8">
                  <div className="inline-block px-3 py-1 bg-primary-50 text-primary-700 text-sm font-semibold rounded-full mb-4">
                    {questions[currentStep].category}
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-8">
                    {questions[currentStep].question}
                  </h2>

                  {/* Options */}
                  <div className="space-y-4">
                    {questions[currentStep].options.map((option, index) => (
                      <motion.button
                        key={index}
                        onClick={() => handleAnswer(option.score)}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full p-6 text-left border-2 border-gray-200 rounded-xl hover:border-primary-500 hover:bg-primary-50 transition-all group"
                      >
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full border-2 border-gray-300 group-hover:border-primary-500 flex items-center justify-center mr-4 flex-shrink-0">
                            <div className="w-4 h-4 rounded-full bg-transparent group-hover:bg-primary-500 transition-all" />
                          </div>
                          <span className="text-lg text-gray-700 group-hover:text-primary-700 font-medium">
                            {option.text}
                          </span>
                        </div>
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Back Button */}
                {currentStep > 0 && (
                  <button
                    onClick={() => setCurrentStep(currentStep - 1)}
                    className="text-primary-600 hover:text-primary-700 font-semibold"
                  >
                    ← Previous Question
                  </button>
                )}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                {/* Score Card */}
                <div className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl shadow-xl p-8 md:p-12 text-white text-center">
                  <FaChartLine className="text-6xl mx-auto mb-6 opacity-90" />
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Your Readiness Score</h2>
                  <div className="text-7xl md:text-8xl font-bold mb-2">
                    {results.percentage.toFixed(0)}%
                  </div>
                  <div className="text-2xl font-semibold opacity-90">
                    {results.readinessLevel}
                  </div>
                </div>

                {/* Recommendation */}
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
                  <h3 className="text-2xl font-bold text-navy-900 mb-4 flex items-center">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Assessment Results
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    {results.recommendation}
                  </p>

                  <h4 className="text-xl font-bold text-navy-900 mb-4">Recommended Next Steps:</h4>
                  <ul className="space-y-3">
                    {results.nextSteps.map((step: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <FaRocket className="text-primary-600 mt-1 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 md:p-12 border border-gray-200 text-center">
                  <h3 className="text-2xl md:text-3xl font-bold text-navy-900 mb-4">
                    Ready to Take Action?
                  </h3>
                  <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
                    Schedule a free consultation to discuss your assessment results and create a customized implementation plan
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                      to="/book-now"
                      className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-bold rounded-xl hover:shadow-xl transition-all"
                    >
                      Book Free Consultation
                    </Link>
                    <button
                      onClick={resetAssessment}
                      className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 text-gray-700 font-bold rounded-xl hover:border-primary-500 hover:text-primary-600 transition-all"
                    >
                      Retake Assessment
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default ReadinessAssessment;
