import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center p-8">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-[#40c1b9] mb-4">404</h1>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Page Not Found
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-md mx-auto">
            Sorry, the page you are looking for doesn't exist or has been moved.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => navigate('/')}
            className="bg-[#40c1b9] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#359a93] transition-colors duration-200"
          >
            Go Home
          </button>
          <button
            onClick={() => navigate(-1)}
            className="border-2 border-[#40c1b9] text-[#40c1b9] px-8 py-3 rounded-full font-semibold hover:bg-[#40c1b9] hover:text-white transition-colors duration-200"
          >
            Go Back
          </button>
        </div>
        
        <div className="mt-12">
          <p className="text-gray-500 mb-4">Need help? Contact us:</p>
          <div className="flex justify-center space-x-6">
            <a
              href="tel:+918084388876"
              className="text-[#40c1b9] hover:text-[#359a93] transition-colors"
            >
              📞 +91 80843 88876
            </a>
            <a
              href="mailto:prashantkashyap2804@gmail.com"
              className="text-[#40c1b9] hover:text-[#359a93] transition-colors"
            >
              ✉️ Email Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;