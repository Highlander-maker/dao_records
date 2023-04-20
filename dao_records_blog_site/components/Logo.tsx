
function Logo(props: any) {
  const { renderDefault, title } = props;

  return (
    <div className="flex items-center space-x-2">
      <img
        className="rounded-full"
        height={100}
        width={100}
        src="https://2549163913-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MZiFiIZH5IkEYsWMUO4%2Fuploads%2FzR2Ri5XToPG2tWm7TRok%2FDocs.png?alt=media&token=46a7b4e1-1051-4ec7-a6d6-0a939ee9bc67"
        alt="logo"
      />
      {renderDefault && <> {renderDefault(props)}</>}
    </div>
  );
}

export default Logo;
