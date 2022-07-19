import { InertiaLink } from "@inertiajs/inertia-react";

export default function Pagination({ links }) {

    return (
        <nav aria-label="Page navigation example">
            <ul className="inline-flex items-center -space-x-px">
                {
                    links.map((link, index) => {
                        if (link?.label.includes('Previous')) {
                            return (
                                <li key={index}>
                                    <a dangerouslySetInnerHTML={{ __html: link?.label }} href={link?.url} aria-current="page" className={`z-10 rounded-tl-md rounded-bl-md py-2 px-3 leading-tight ${link?.active ? "text-blue-600 bg-blue-50 border border-blue-300 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                                        :
                                        "text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"}`}></a>
                                </li>
                            );
                        } else if(link?.label.includes('Next')) {
                            return (
                                <li key={index}>
                                    <a dangerouslySetInnerHTML={{ __html: link?.label }} href={link?.url} aria-current="page" className={`z-10 rounded-tr-md rounded-br-md py-2 px-3 leading-tight ${link?.active ? "text-blue-600 bg-blue-50 border border-blue-300 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                                        :
                                        "text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"}`}></a>
                                </li>
                            );
                        }
                        return (
                            <li key={index}>
                                <a dangerouslySetInnerHTML={{ __html: link?.label }} href={link?.url} aria-current="page" className={`z-10 py-2 px-3 leading-tight ${link?.active ? "text-blue-600 bg-blue-50 border border-blue-300 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                                    :
                                    "text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"}`}></a>
                            </li>
                        );
                    })
                }
            </ul>
        </nav>

    );
}