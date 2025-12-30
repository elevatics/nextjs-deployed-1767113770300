export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">
          🚀 Deployed!
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Your Next.js app is now live on Vercel
        </p>
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-md">
          <p className="text-gray-700 mb-4">
            This app was automatically deployed using:
          </p>
          <ul className="text-left space-y-2 text-gray-600">
            <li>✅ GitHub API for repository creation</li>
            <li>✅ Vercel API for deployment</li>
            <li>✅ Next.js 14 with TypeScript</li>
          </ul>
        </div>
      </div>
    </main>
  );
}