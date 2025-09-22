// Configuration module for environment variables
class Config {
    constructor() {
        this.envVars = {};
        this.isLoaded = false;
    }

    // Load environment variables synchronously
    async loadEnvVars() {
        if (this.isLoaded) return this.envVars;
        
        try {
            console.log('Loading environment configuration...');
            const response = await fetch('./.env.json');
            if (response.ok) {
                this.envVars = await response.json();
                this.isLoaded = true;
                console.log('Environment configuration loaded successfully');
                return this.envVars;
            } else {
                console.log('No .env.json file found, using fallback methods');
            }
        } catch (error) {
            console.log('Error loading environment configuration:', error);
        }
        
        this.isLoaded = true;
        return this.envVars;
    }

    // Get API key with multiple fallback options
    getApiKey() {
        // Priority order:
        // 1. Environment variable (if loaded)
        // 2. Session storage (current implementation)
        // 3. Local storage (persistent storage)
        // 4. Return null to prompt user input

        if (this.envVars.GEMINI_API_KEY && this.envVars.GEMINI_API_KEY !== 'your_actual_api_key_here') {
            console.log('Using API key from environment configuration');
            return this.envVars.GEMINI_API_KEY;
        }

        const sessionKey = sessionStorage.getItem('geminiApiKey');
        if (sessionKey) {
            console.log('Using API key from session storage');
            return sessionKey;
        }

        const localKey = localStorage.getItem('geminiApiKey');
        if (localKey) {
            console.log('Using API key from local storage');
            return localKey;
        }

        console.log('No API key found in any storage');
        return null;
    }

    // Save API key to persistent storage
    saveApiKey(apiKey, persistent = false) {
        if (persistent) {
            localStorage.setItem('geminiApiKey', apiKey);
        } else {
            sessionStorage.setItem('geminiApiKey', apiKey);
        }
    }

    // Get API base URL
    getApiBaseUrl() {
        return this.envVars.GEMINI_API_BASE_URL || 'https://generativelanguage.googleapis.com/v1beta';
    }

    // Get model name
    getModel() {
        return this.envVars.GEMINI_MODEL || 'gemini-2.5-flash-preview-05-20';
    }

    // Get full API URL
    getApiUrl() {
        const apiKey = this.getApiKey();
        if (!apiKey) {
            throw new Error('API key not found');
        }
        return `${this.getApiBaseUrl()}/models/${this.getModel()}:generateContent?key=${apiKey}`;
    }

    // Get application configuration
    getAppConfig() {
        return {
            name: this.envVars.APP_NAME || 'Kongu Engineering College AI Assistant',
            version: this.envVars.APP_VERSION || '1.0.0'
        };
    }

    // Check if API key is configured
    isConfigured() {
        return !!this.getApiKey();
    }

    // Clear stored API keys
    clearApiKeys() {
        sessionStorage.removeItem('geminiApiKey');
        localStorage.removeItem('geminiApiKey');
    }

    // Get environment loading status
    isEnvironmentLoaded() {
        return this.isLoaded;
    }
}

// Export for use in other modules
window.Config = Config;