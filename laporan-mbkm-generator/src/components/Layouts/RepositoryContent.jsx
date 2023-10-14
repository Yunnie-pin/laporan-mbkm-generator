const RepositoryContent = (props) => {
  const { data } = props;

  if (!data) return "loading...";
  return (
    <div className="row">
      <div>
          <h2 className="text-center">{data.full_name}</h2> 
          <p className="text-center">{data.description}</p>


        <div className="d-flex justify-content-center pb-3">
          <div className="px-4">
            <i className="bi bi-eye"></i> watchers : {data.watchers}
          </div>
          <div className="px-4">
            <i className="bi bi-alt"></i> forks : {data.forks}
          </div>
          <div className="px-4">
            <i class="bi bi-bookmark"></i> stars : {data.stargazers_count}
          </div>
        </div>

        <div className="d-flex justify-content-center">
          <a
            href={data.html_url}
            className="btn btn-dark border-top border-light"
          >
            Visit Repository
          </a>
        </div>
      </div>
    </div>
  );
};

export default RepositoryContent;
