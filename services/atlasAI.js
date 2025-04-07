/**
 * ATLAS (Advanced Trading and Learning Analysis System)
 * A sophisticated AI system for financial analysis and advice
 */

class AtlasAI {
    constructor() {
        this.name = "ATLAS";
        this.version = "1.0.0";
        this.specialties = [
            "Investment Analysis",
            "Portfolio Optimization",
            "Risk Assessment",
            "Market Trend Analysis",
            "Personal Finance Management"
        ];
    }

    /**
     * Analyzes user sentiment and context from the input message
     * @param {string} message - User's input message
     * @returns {Object} - Analyzed context and sentiment
     */
    analyzeContext(message) {
        const keywords = {
            investment: /\b(invest|stock|bond|etf|fund|portfolio|dividend)\b/i,
            risk: /\b(risk|safe|secure|volatile|stability)\b/i,
            planning: /\b(plan|goal|future|retire|save|budget)\b/i,
            market: /\b(market|trend|bull|bear|crash|rally)\b/i,
            personal: /\b(debt|credit|loan|mortgage|salary|income)\b/i
        };

        const context = {
            isInvestmentRelated: keywords.investment.test(message),
            isRiskRelated: keywords.risk.test(message),
            isPlanningRelated: keywords.planning.test(message),
            isMarketRelated: keywords.market.test(message),
            isPersonalFinance: keywords.personal.test(message)
        };

        return context;
    }

    /**
     * Generates a detailed response based on the user's query
     * @param {string} message - User's input message
     * @returns {string} - AI generated response
     */
    generateResponse(message) {
        const context = this.analyzeContext(message);
        let response = "";

        // Add ATLAS's personality
        const greeting = "I'm ATLAS, your Advanced Trading and Learning Analysis System. ";

        // Generate context-aware response
        if (context.isInvestmentRelated) {
            response = this.generateInvestmentAdvice(message);
        } else if (context.isRiskRelated) {
            response = this.generateRiskAnalysis(message);
        } else if (context.isPlanningRelated) {
            response = this.generateFinancialPlanningAdvice(message);
        } else if (context.isMarketRelated) {
            response = this.generateMarketAnalysis(message);
        } else if (context.isPersonalFinance) {
            response = this.generatePersonalFinanceAdvice(message);
        } else {
            response = this.generateGeneralAdvice(message);
        }

        return greeting + response;
    }

    generateInvestmentAdvice(message) {
        return "Based on current market conditions and your query, I recommend focusing on diversification across multiple asset classes. Consider a mix of growth stocks, value stocks, and bonds to optimize your portfolio's risk-adjusted returns. Would you like me to provide more specific investment strategies?";
    }

    generateRiskAnalysis(message) {
        return "Let me analyze the risk factors for you. In the current market environment, it's crucial to consider both systematic and unsystematic risks. I suggest implementing proper risk management strategies such as stop-loss orders and position sizing. Would you like a detailed risk assessment of your portfolio?";
    }

    generateFinancialPlanningAdvice(message) {
        return "For effective financial planning, we should consider your long-term goals, current income, and risk tolerance. I recommend creating a comprehensive financial plan that includes emergency funds, retirement savings, and investment strategies aligned with your objectives. Shall we discuss your specific financial goals in detail?";
    }

    generateMarketAnalysis(message) {
        return "My analysis of current market trends indicates several key factors affecting market dynamics. I'm monitoring economic indicators, sector rotations, and global events to provide you with actionable insights. Would you like me to break down specific market opportunities I've identified?";
    }

    generatePersonalFinanceAdvice(message) {
        return "For personal finance optimization, I recommend focusing on building a strong financial foundation. This includes maintaining a healthy emergency fund, managing debt effectively, and creating a sustainable budget. Would you like me to help you create a personalized financial strategy?";
    }

    generateGeneralAdvice(message) {
        return "I can help you with various financial aspects including investment strategies, risk management, financial planning, market analysis, and personal finance. What specific area would you like to focus on?";
    }
}

// Create a singleton instance
const atlas = new AtlasAI();

/**
 * Process user queries through ATLAS
 * @param {string} message - User's input message
 * @returns {Promise<string>} - ATLAS's response
 */
async function processAtlasQuery(message) {
    try {
        // Simulate AI processing time (0.5-1.5 seconds)
        await new Promise(resolve => setTimeout(resolve, Math.random() * 1000 + 500));
        return atlas.generateResponse(message);
    } catch (error) {
        console.error('Error in ATLAS processing:', error);
        throw new Error('Failed to process query');
    }
}

module.exports = {
    processAtlasQuery
};