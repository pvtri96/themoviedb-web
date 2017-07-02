import React from 'react';
import Link from 'next/link';


const ContentWrapper = props => {

  return (
    <div className="content_wrapper">
      <div className="shortcut_bar">
        <Link  >
          <a>
            Discussions
          </a>
        </Link>
      </div>
      <div className="shortcut_bar">
        <Link  >
          <a>
            Reviews
          </a>
        </Link>

      </div>

      <div className="shortcut_bar">
        <Link  >
          <a>
            Videos
          </a>
        </Link>

      </div>

      <div className="shortcut_bar">
        <Link  >
          <a>
            Images
          </a>
        </Link>

      </div>

      <div className="shortcut_bar">
        <Link  >
          <a>
            Changes
          </a>
        </Link>

      </div>

      <div className="shortcut_bar">
        <Link  >
          <a>
            Report
          </a>
        </Link>

      </div>

      <div className="shortcut_bar">
        <Link  >
          <a>
            Share
          </a>
        </Link>

      </div>

      <div className="shortcut_bar">
        <Link  >
          <a>
            Edit
          </a>
        </Link>

      </div>

    </div>
  );
};

export default ContentWrapper;
