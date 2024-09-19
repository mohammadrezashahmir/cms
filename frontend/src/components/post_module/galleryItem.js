import React from 'react';

const GalleryItem = ({image, setShow, setModalParam}) => {

    return (
        <div
            className="w-24 h-24 relative image-fit mb-5 ml-5 cursor-pointer zoom-in">
            <img
                className="rounded-md"
                alt="عکس گالری"
                src={image.image}
            />
            <div
                className="tooltip w-5 h-5 flex items-center justify-center absolute rounded-full text-white bg-theme-6 left-0 top-0 -ml-2 -mt-2"
                onClick={() => {
                    setModalParam({
                        imageId: image.id
                    })
                    setShow(true)
                }}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-x w-4 h-4"
                >
                    <line x1="18" y1="6"
                          x2="6"
                          y2="18"></line>
                    <line x1="6" y1="6"
                          x2="18"
                          y2="18"></line>
                </svg>
            </div>

        </div>
    );
};

export default GalleryItem;