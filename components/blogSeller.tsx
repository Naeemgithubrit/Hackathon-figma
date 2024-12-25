import Image from 'next/image';

export default function BlogProducts() {
    return (
        <div className="container mx-auto px-4 py-16">
            <h2 className="text-3xl font-bold text-center mb-8">BESTSELLER PRODUCTS</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 ">
                <div className="bg-white  overflow-hidden">
                    <Image
                        src="/images/blogproduct/1.png"
                        alt="Product 1"
                        width={300}
                        height={400}
                        className="w-full object-cover"
                    />
                    <div className="p-4">
                    <h3 className="text-sm font-bold mb-2 ml-8">Graphic Design</h3>
                        <p className="text-gray-600 mb-4 font-normal text-center">English Department</p>
                        <div className="flex  items-center ml-10">
                            <span className="text-sm text-gray-400">$16.48</span>
                            <span className="text-sm font-bold text-green-700 ml-1">$6.48</span>
                        </div>

                    </div>
                </div>
                <div className="bg-white rounded-lg  overflow-hidden">
                    <Image
                        src="/images/blogproduct/2.png"
                        alt="Product 2"
                        width={300}
                        height={400}
                        className="w-full object-cover"
                    />
                    <div className="p-4">
                        <h3 className="text-sm font-bold mb-2 ml-8">Graphic Design</h3>
                        <p className="text-gray-600 mb-4 font-normal text-center">English Department</p>
                        <div className="flex  items-center ml-10">
                            <span className="text-sm text-gray-400">$16.48</span>
                            <span className="text-sm font-bold text-green-700 ml-1">$6.48</span>
                        </div>

                    </div>
                </div>
                <div className="bg-white rounded-lg  overflow-hidden">
                    <Image
                        src="/images/blogproduct/3.png"
                        alt="Product 3"
                        width={300}
                        height={400}
                        className="w-full object-cover"
                    />
                    <div className="p-4">
                        <h3 className="text-sm font-bold mb-2 ml-8">Graphic Design</h3>
                        <p className="text-gray-600 mb-4 font-normal text-center">English Department</p>
                        <div className="flex  items-center ml-10">
                            <span className="text-sm text-gray-400">$16.48</span>
                            <span className="text-sm font-bold text-green-700 ml-1">$6.48</span>
                        </div>

                    </div>
                </div>
                <div className="bg-white rounded-lg  overflow-hidden">
                    <Image
                        src="/images/blogproduct/4.png"
                        alt="Product 4"
                        width={300}
                        height={400}
                        className="w-full object-cover"
                    />
                    <div className="p-4">
                        <h3 className="text-sm font-bold mb-2 ml-8">Graphic Design</h3>
                        <p className="text-gray-600 mb-4 font-normal text-center">English Department</p>
                        <div className="flex  items-center ml-10">
                            <span className="text-sm text-gray-400">$16.48</span>
                            <span className="text-sm font-bold text-green-700 ml-1">$6.48</span>
                        </div>

                    </div>
                </div>
                <div className="bg-white rounded-lg  overflow-hidden">
                    <Image
                        src="/images/blogproduct/5.png"
                        alt="Product 5"
                        width={300}
                        height={400}
                        className="w-full object-cover"
                    />
                    <div className="p-4">
                        <h3 className="text-sm font-bold mb-2 ml-8">Graphic Design</h3>
                        <p className="text-gray-600 mb-4 font-normal text-center">English Department</p>
                        <div className="flex  items-center ml-10">
                            <span className="text-sm text-gray-400">$16.48</span>
                            <span className="text-sm font-bold text-green-700 ml-1">$6.48</span>
                        </div>

                    </div>
                </div>
                <div className="bg-white rounded-lg  overflow-hidden">
                    <Image
                        src="/images/blogproduct/6.png"
                        alt="Product 6"
                        width={300}
                        height={400}
                        className="w-full object-cover"
                    />
                    <div className="p-4">
                        <h3 className="text-sm font-bold mb-2 ml-8">Graphic Design</h3>
                        <p className="text-gray-600 mb-4 font-normal text-center">English Department</p>
                        <div className="flex  items-center ml-10">
                            <span className="text-sm text-gray-400">$16.48</span>
                            <span className="text-sm font-bold text-green-700 ml-1">$6.48</span>
                        </div>

                    </div>
                </div>
                <div className="bg-white rounded-lg  overflow-hidden">
                    <Image
                        src="/images/blogproduct/1.png"
                        alt="Product 1"
                        width={300}
                        height={400}
                        className="w-full object-cover"
                    />
                    <div className="p-4">
                        <h3 className="text-sm font-bold mb-2 ml-8">Graphic Design</h3>
                        <p className="text-gray-600 mb-4 font-normal text-center">English Department</p>
                        <div className="flex  items-center ml-10">
                            <span className="text-sm text-gray-400">$16.48</span>
                            <span className="text-sm font-bold text-green-700 ml-1">$6.48</span>
                        </div>

                    </div>
                </div>
                <div className="bg-white rounded-lg  overflow-hidden">
                    <Image
                        src="/images/blogproduct/2.png"
                        alt="Product 2"
                        width={300}
                        height={400}
                        className="w-full object-cover"
                    />
                    <div className="p-4">
                        <h3 className="text-sm font-bold mb-2 ml-8">Graphic Design</h3>
                        <p className="text-gray-600 mb-4 font-normal text-center">English Department</p>
                        <div className="flex  items-center ml-10">
                            <span className="text-sm text-gray-400">$16.48</span>
                            <span className="text-sm font-bold text-green-700 ml-1">$6.48</span>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};