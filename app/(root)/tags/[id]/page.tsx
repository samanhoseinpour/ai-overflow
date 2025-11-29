const TagsSinglePage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  return <div>Tags number: {id}</div>;
};

export default TagsSinglePage;
