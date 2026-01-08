export function TreatmentPage({ title, image, description }) {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-8">
            <h1 className="text-4xl font-bold mb-6 text-pink-600">{title}</h1>
            <img
                src={image}
                alt={title}
                className="w-full max-w-md rounded-2xl shadow-lg mb-6"
            />
            <p className="text-lg text-gray-600 text-center max-w-2xl">
                {description}
            </p>
        </div>
    );
}