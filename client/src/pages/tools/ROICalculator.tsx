import SEO from '../../components/common/SEO';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaCalculator, FaChartLine, FaDollarSign, FaClock, FaRocket } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ROICalculator = () => {
  const [formData, setFormData] = useState({
    industry: 'accounting',
    employees: '5',
    avgHourlyRate: '35',
    hoursPerWeekOnRepetitiveTasks: '20',
    currentMonthlyRevenue: '50000'
  });

  const [results, setResults] = useState<any>(null);

  const industries = [
    { value: 'accounting', label: 'Accounting & Tax', efficiency: 0.45, payback: 4 },
    { value: 'insurance', label: 'Insurance Agency', efficiency: 0.40, payback: 5 },
    { value: 'real-estate', label: 'Real Estate', efficiency: 0.38, payback: 6 },
    { value: 'construction', label: 'Construction', efficiency: 0.42, payback: 6 },
    { value: 'healthcare', label: 'Healthcare', efficiency: 0.35, payback: 8 },
    { value: 'legal', label: 'Legal Practice', efficiency: 0.40, payback: 5 },
    { value: 'ecommerce', label: 'E-Commerce', efficiency: 0.35, payback: 5 },
    { value: 'other', label: 'Other', efficiency: 0.30, payback: 6 }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const calculateROI = () => {
    const industry = industries.find(i => i.value === formData.industry)!;
    const employees = parseInt(formData.employees);
    const hourlyRate = parseFloat(formData.avgHourlyRate);
    const hoursPerWeek = parseFloat(formData.hoursPerWeekOnRepetitiveTasks);

    // Calculate current waste
    const annualHoursWasted = hoursPerWeek * 52 * employees;
    const annualCostWasted = annualHoursWasted * hourlyRate;

    // Calculate savings with automation
    const hoursSaved = annualHoursWasted * industry.efficiency;
    const annualSavings = hoursSaved * hourlyRate;
    const monthlySavings = annualSavings / 12;

    // Estimate implementation cost (based on company size)
    let implementationCost = 15000; // Base cost
    if (employees <= 5) implementationCost = 12000;
    else if (employees <= 20) implementationCost = 25000;
    else if (employees <= 50) implementationCost = 50000;
    else implementationCost = 75000;

    // Calculate ROI
    const paybackMonths = industry.payback;
    const firstYearROI = ((annualSavings - implementationCost) / implementationCost) * 100;
    const threeYearROI = (((annualSavings * 3) - implementationCost) / implementationCost) * 100;

    // Productivity gains
    const productivityGainPercent = industry.efficiency * 100;
    const additionalCapacity = hoursSaved / 2080; // Convert to FTE

    setResults({
      annualHoursWasted,
      annualCostWasted,
      hoursSaved,
      annualSavings,
      monthlySavings,
      implementationCost,
      paybackMonths,
      firstYearROI,
      threeYearROI,
      productivityGainPercent,
      additionalCapacity
    });
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value);
  };

  const formatNumber = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value);
  };

  return (
    <>
      <SEO
        title="AI & Automation ROI Calculator | MRECAI"
        description="Calculate your potential savings from AI and automation. Free ROI calculator with industry-specific benchmarks."
        canonical="/tools/roi-calculator"
      />

      <div className="pt-20 min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <section className="section-padding">
          <div className="container-custom max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center px-4 py-2 bg-primary-100 rounded-full text-primary-700 text-sm font-semibold mb-6">
                <FaCalculator className="mr-2" />
                Free ROI Calculator
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                AI & Automation <span className="gradient-text">ROI Calculator</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover how much time and money you could save with intelligent automation
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Input Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
              >
                <h2 className="text-2xl font-bold text-navy-900 mb-6">Your Business Details</h2>

                <div className="space-y-6">
                  {/* Industry */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Industry
                    </label>
                    <select
                      name="industry"
                      value={formData.industry}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      {industries.map(ind => (
                        <option key={ind.value} value={ind.value}>{ind.label}</option>
                      ))}
                    </select>
                  </div>

                  {/* Number of Employees */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Number of Employees
                    </label>
                    <input
                      type="number"
                      name="employees"
                      value={formData.employees}
                      onChange={handleChange}
                      min="1"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>

                  {/* Average Hourly Rate */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Average Hourly Rate ($)
                    </label>
                    <input
                      type="number"
                      name="avgHourlyRate"
                      value={formData.avgHourlyRate}
                      onChange={handleChange}
                      min="0"
                      step="5"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>

                  {/* Hours on Repetitive Tasks */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Hours/Week on Repetitive Tasks (per employee)
                    </label>
                    <input
                      type="number"
                      name="hoursPerWeekOnRepetitiveTasks"
                      value={formData.hoursPerWeekOnRepetitiveTasks}
                      onChange={handleChange}
                      min="0"
                      step="1"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                    <p className="text-sm text-gray-500 mt-1">
                      Examples: data entry, scheduling, email follow-ups, reporting
                    </p>
                  </div>

                  {/* Monthly Revenue */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Current Monthly Revenue ($)
                    </label>
                    <input
                      type="number"
                      name="currentMonthlyRevenue"
                      value={formData.currentMonthlyRevenue}
                      onChange={handleChange}
                      min="0"
                      step="1000"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>

                  {/* Calculate Button */}
                  <button
                    onClick={calculateROI}
                    className="w-full px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-bold rounded-xl hover:shadow-xl transition-all flex items-center justify-center space-x-2"
                  >
                    <FaChartLine />
                    <span>Calculate ROI</span>
                  </button>
                </div>
              </motion.div>

              {/* Results */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {results ? (
                  <div className="space-y-6">
                    {/* Key Metrics */}
                    <div className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl shadow-xl p-8 text-white">
                      <h2 className="text-2xl font-bold mb-6">Your Potential Savings</h2>
                      
                      <div className="space-y-4">
                        <div className="flex items-center justify-between pb-4 border-b border-white/20">
                          <div className="flex items-center">
                            <FaDollarSign className="text-3xl mr-3" />
                            <div>
                              <div className="text-sm opacity-90">Annual Savings</div>
                              <div className="text-3xl font-bold">{formatCurrency(results.annualSavings)}</div>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between pb-4 border-b border-white/20">
                          <div className="flex items-center">
                            <FaClock className="text-3xl mr-3" />
                            <div>
                              <div className="text-sm opacity-90">Hours Saved/Year</div>
                              <div className="text-3xl font-bold">{formatNumber(results.hoursSaved)}</div>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <FaRocket className="text-3xl mr-3" />
                            <div>
                              <div className="text-sm opacity-90">Payback Period</div>
                              <div className="text-3xl font-bold">{results.paybackMonths} months</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Detailed Breakdown */}
                    <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                      <h3 className="text-xl font-bold text-navy-900 mb-6">Detailed Analysis</h3>
                      
                      <div className="space-y-4">
                        <div className="flex justify-between items-center py-3 border-b border-gray-100">
                          <span className="text-gray-700">Current Annual Waste</span>
                          <span className="font-bold text-red-600">{formatCurrency(results.annualCostWasted)}</span>
                        </div>

                        <div className="flex justify-between items-center py-3 border-b border-gray-100">
                          <span className="text-gray-700">Monthly Savings</span>
                          <span className="font-bold text-green-600">{formatCurrency(results.monthlySavings)}</span>
                        </div>

                        <div className="flex justify-between items-center py-3 border-b border-gray-100">
                          <span className="text-gray-700">Implementation Cost</span>
                          <span className="font-bold text-gray-900">{formatCurrency(results.implementationCost)}</span>
                        </div>

                        <div className="flex justify-between items-center py-3 border-b border-gray-100">
                          <span className="text-gray-700">First Year ROI</span>
                          <span className="font-bold text-primary-600">{results.firstYearROI.toFixed(0)}%</span>
                        </div>

                        <div className="flex justify-between items-center py-3 border-b border-gray-100">
                          <span className="text-gray-700">3-Year ROI</span>
                          <span className="font-bold text-primary-600">{results.threeYearROI.toFixed(0)}%</span>
                        </div>

                        <div className="flex justify-between items-center py-3 border-b border-gray-100">
                          <span className="text-gray-700">Productivity Gain</span>
                          <span className="font-bold text-green-600">{results.productivityGainPercent.toFixed(0)}%</span>
                        </div>

                        <div className="flex justify-between items-center py-3">
                          <span className="text-gray-700">Additional Capacity</span>
                          <span className="font-bold text-primary-600">{results.additionalCapacity.toFixed(1)} FTE</span>
                        </div>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200 text-center">
                      <h3 className="text-2xl font-bold text-navy-900 mb-4">Ready to Get Started?</h3>
                      <p className="text-gray-700 mb-6">
                        Schedule a free consultation to discuss your specific automation opportunities
                      </p>
                      <Link
                        to="/book-now"
                        className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-bold rounded-xl hover:shadow-xl transition-all"
                      >
                        Book Free Consultation
                      </Link>
                    </div>
                  </div>
                ) : (
                  <div className="bg-white rounded-2xl shadow-xl p-12 border border-gray-100 text-center h-full flex items-center justify-center">
                    <div>
                      <FaCalculator className="text-6xl text-gray-300 mx-auto mb-6" />
                      <h3 className="text-2xl font-bold text-gray-400 mb-2">Enter Your Details</h3>
                      <p className="text-gray-500">
                        Fill out the form and click "Calculate ROI" to see your potential savings
                      </p>
                    </div>
                  </div>
                )}
              </motion.div>
            </div>

            {/* Disclaimer */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-12 text-center"
            >
              <p className="text-sm text-gray-500 max-w-3xl mx-auto">
                * Results are estimates based on industry benchmarks from McKinsey, PwC, Gartner, and Deloitte. 
                Actual results may vary based on your specific implementation and business conditions. 
                Schedule a consultation for a detailed analysis tailored to your business.
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ROICalculator;
