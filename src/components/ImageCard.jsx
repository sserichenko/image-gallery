import React from 'react';

const ImageCard = ({image}) => {

    const tagsArray = image && image.tags.split(',');

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img src={image.webformatURL} className="w-full" alt="" />
      <div className="px-6 py-4">
        <div className="font-bold text-purple-500 text-xl mb-2">Photo By {image.user}</div>
        <ul>
          <li>
            <strong>Views: </strong>
            {image.views}
          </li>
          <li>
            <strong>Downloads: </strong>
            {image.downloads ? image.downloads : 0}
          </li>
          <li>
            <strong>Likes: </strong>
            {image.likes}
          </li>
        </ul>
      </div>
      <div className="px-6 py-4">
          {
              tagsArray && 
              tagsArray.map((tag, index) => (
                  <span key={`${tag}_${index}`} className="inline-block bg-gray-200 rounded-full px-3 py-2 text-sm font-semibold text-grey-700 mr-3 mb-2">
                     #{tag}
                    </span>
              ))

          }
      </div>
    </div>
    );
};

export default ImageCard;