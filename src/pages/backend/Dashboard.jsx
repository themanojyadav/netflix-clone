import React from "react";

import MoviesSlider from "../../components/backend/MoviesSlider";

function Dashboard() {
  return (
    <div>
      <div className="b_common_list_section">
        <div className="container">
          <div className="b_common_list_section_header">
            <h4 className="b_common_list_section_title">Now Playing</h4>
          </div>
          <div className="b_common_list_section_content">
            <MoviesSlider category="now_playing" />
          </div>
        </div>
      </div>
      <div className="b_common_list_section">
        <div className="container">
          <div className="b_common_list_section_header">
            <h4 className="b_common_list_section_title">
              Trending of the week
            </h4>
          </div>
          <div className="b_common_list_section_content">
            <MoviesSlider category="trending" />
          </div>
        </div>
      </div>

      <div className="b_common_list_section">
        <div className="container">
          <div className="b_common_list_section_header">
            <h4 className="b_common_list_section_title">Popular Movies</h4>
          </div>
          <div className="b_common_list_section_content">
            <MoviesSlider category="movie" />
          </div>
        </div>
      </div>

      <div className="b_common_list_section">
        <div className="container">
          <div className="b_common_list_section_header">
            <h4 className="b_common_list_section_title">Upcoming Movies</h4>
          </div>
          <div className="b_common_list_section_content">
            <MoviesSlider category="upcoming" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
