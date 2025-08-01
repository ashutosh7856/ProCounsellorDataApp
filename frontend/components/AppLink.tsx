import { Award, MessageCircle, Smartphone } from "lucide-react";

export default function AppLink(){
    return(
        <>
        <div className="my-16 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 text-center text-white shadow-2xl">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-4">
              <MessageCircle className="w-4 h-4" />
              Talk to Expert Counsellors
            </div>
            
            <h2 className="text-3xl font-bold mb-4">Get Personalized Guidance</h2>
            <p className="text-emerald-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              Download our app to connect with expert counsellors who will help you choose the right college based on your interests, budget, and career goals.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* Google Play Store Button */}
              <a 
                href="https://play.google.com/store/apps/details?id=your.app.package" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white text-emerald-600 font-semibold py-4 px-8 rounded-xl hover:bg-gray-50 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-3 group"
              >
                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.92 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-xs text-emerald-600/70">Get it on</div>
                    <div className="text-sm font-bold">Google Play</div>
                  </div>
                </div>
              </a>
              
              {/* App Store Button */}
              <a 
                href="https://apps.apple.com/app/your-app-name/idYOUR_APP_ID" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-emerald-700/50 backdrop-blur-sm text-white font-semibold py-4 px-8 rounded-xl hover:bg-emerald-700/70 transition-all duration-200 border border-emerald-400/30 flex items-center justify-center gap-3 group"
              >
                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-xs text-white/70">Download on the</div>
                    <div className="text-sm font-bold">App Store</div>
                  </div>
                </div>
              </a>
            </div>
            
            <div className="mt-6 flex flex-wrap justify-center gap-6 text-emerald-200 text-sm">
              <div className="flex items-center gap-2">
                <Smartphone className="w-4 h-4" />
                Free Download
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4" />
                Expert Counsellors
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4" />
                Personalized Guidance
              </div>
            </div>
          </div>
        </div>
        </>
    )
}