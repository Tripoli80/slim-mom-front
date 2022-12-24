const AddNewProductForm = () => {
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    const formdata = {
      title: form.elements.title.value,
      categories: form.elements.categories.value,
      calories: form.elements.calories.value,
    };
    console.log('formdata:', formdata);
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <label>
        title
        <input type="text" name="title" />
      </label>
      <label>
        categories
        <input type="text" name="categories" />
      </label>
      <label>
        calories
        <input type="number" name="calories" />
      </label>
      <button type="submit">Add product</button>
    </form>
  );
};

export default AddNewProductForm;
