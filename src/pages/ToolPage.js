// src/pages/ToolPage.js
import { HOSPITAL_NAME } from '../data';

const ToolPage = ({ toolName }) => (
    <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-extrabold text-[#40c1b9] mb-4">{toolName}</h1>
            <p className="text-xl text-gray-600 mb-8">Interactive health tool provided by {HOSPITAL_NAME}.</p>
            <div className="bg-white p-8 rounded-xl max-w-2xl mx-auto shadow-md border-t-4 border-[#40c1b9]">
                <p className="text-gray-700">
                    This is where the **{toolName}** interactive tool would be embedded. Users could input their data (like blood pressure readings, heart rate, or dates for the period tracker) to monitor their health over time.
                </p>
                <div className="mt-6 p-4 border border-gray-200 rounded-lg bg-gray-50">
                    <p className="font-mono text-sm text-gray-500">
                        [Placeholder for {toolName} user interface and data input fields.]
                    </p>
                </div>
            </div>
        </div>
    </section>
);

export default ToolPage;