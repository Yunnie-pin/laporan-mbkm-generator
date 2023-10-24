
function GithubContent(props) {
    const { data } = props;

    if(!data) return 'loading...';

    return (
      <div className="d-flex align-items-center">
        <div className="p-3 flex-shrink-0">
          <img
            src={data.avatar_url}
            alt="profile-pict"
            width="150"
            className="img-thumbnail rounded-pill"
          />
        </div>
        <div className="p-3 flex-grow-1">
          <h3>@{data.login}</h3>
      
          <h6><i className="bi bi-geo-alt"></i> {data.location}</h6>
          <div className="card border border-white bg-dark my-2">
            <div className="row">
              <div className="col-lg-6">
                <i className="bi bi-chevron-compact-right">Followers: {data.followers}</i>
              </div>
              <div className="col-lg-6">
                <i className="bi bi-chevron-compact-right">Following: {data.following}</i>
              </div>
            </div>
          </div>
          <a
            href={data.html_url}
            className="btn btn-dark border-top border-light"
          >
            Visit Github
          </a>
        </div>
      </div>
    );
  }

  

export default GithubContent;