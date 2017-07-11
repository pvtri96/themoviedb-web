import React from 'react';
import Link from 'next/link';




const ContentWrapper = props => {

  return (
    <div className="content_wrapper">
      <div className="shortcut_bar">
        <Link href="#" >
          <a>
            Discussions
          </a>
        </Link>
      </div>
      <div className="shortcut_bar">
        <Link href="#" >
          <a>
            Reviews
          </a>
        </Link>

      </div>

      <div className="shortcut_bar">
        <Link href="#" >
          <a>
            Videos
          </a>
        </Link>

      </div>

      <div className="shortcut_bar">
        <Link href="#" >
          <a>
            Images
          </a>
        </Link>

      </div>

      <div className="shortcut_bar">
        <Link href="#" >
          <a>
            Changes
          </a>
        </Link>

      </div>

      <div className="shortcut_bar">
        <Link href="#" >
          <a>
            Report
          </a>
        </Link>

      </div>

      <div className="shortcut_bar">
        <Link href="#" >
          <a>
            Share
          </a>
        </Link>

      </div>

      <div className="shortcut_bar">
        <Link href="#" >
          <a>
            Edit
          </a>
        </Link>

      </div>

    </div>
  );
};

export default ContentWrapper;
