import React from 'react';

const Repo = ({ repo: { name, htmlUrl, description } }) => {
  return (
    <div className="pt-16 pb-16 mx-5 ">
      {/** container widgets */}
      <div className="box-border">
        <div className="break-inside flex items-center justify-between bg-black text-white rounded-xl p-4 mb-4">
          <div className="items-center">
            <div>
              <svg width="74" height="74" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M64 32C64 49.6731 49.6731 64 32 64C14.3269 64 0 49.6731 0 32C0 14.3269 14.3269 2.3509e-05 32 2.3509e-05C49.6731 2.3509e-05 64 14.3269 64 32ZM6.13666 32C6.13666 46.284 17.7161 57.8634 32 57.8634C46.2839 57.8634 57.8633 46.284 57.8633 32C57.8633 17.7161 46.2839 6.13668 32 6.13668C17.7161 6.13668 6.13666 17.7161 6.13666 32Z"
                  fill="#3C3C3C"
                />
                <path
                  d="M20.0412 5.65559C19.3408 4.11254 20.0205 2.2786 21.6235 1.72908C27.1738 -0.173579 33.1614 -0.519827 38.9281 0.759001C45.6969 2.26006 51.795 5.91887 56.3049 11.1848C60.8148 16.4508 63.4924 23.039 63.9348 29.9581C64.3117 35.8528 63.0489 41.716 60.3154 46.9078C59.5259 48.4072 57.6093 48.7968 56.1923 47.8674C54.7753 46.9381 54.3984 45.0422 55.1535 43.5252C57.1768 39.4605 58.1027 34.9168 57.8106 30.3497C57.4531 24.7575 55.2889 19.4327 51.6439 15.1766C47.9989 10.9205 43.0702 7.96331 37.5995 6.75011C33.1316 5.7593 28.4996 5.97546 24.1721 7.34971C22.557 7.8626 20.7417 7.19864 20.0412 5.65559Z"
                  fill="white"
                />
              </svg>
              <span className="vulnerable">32%</span>
            </div>
            <div className="details">
              <a href={htmlUrl}>{name}</a>
              <div> {description} </div>
            </div>
          </div>
          <span className="select">
            <svg width="26" height="26" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20M16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z"
                fill="currentColor"
              />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
};
export default Repo;
