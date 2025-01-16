import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const img_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_TOKEN;
const img_hosting_api = `https://api.imgbb.com/1/upload?key=${img_hosting_key}`;

const AddItem = () => {
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const handleAddItem = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const category = form.category.value;
    const price = parseInt(form.price.value);
    const recipe = form.recipe.value;
    const photoFile = form.photo.files[0];

    //image upload
    const formData = new FormData();
    formData.append("image", photoFile);

    // Upload the image to ImgBB
    const res = await axiosPublic.post(img_hosting_api, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    const imgData = res.data.data.url;
    const newItem = { name, recipe, image: imgData, category, price };
    // console.log(newItem);
    if (res.data.success) {
      //send it to server
      const menuRes = await axiosSecure.post("/menus", newItem);
      console.log(menuRes.data);
      if (menuRes.data.insertedId) {
        Swal.fire({
          title: "Item Added",
          icon: "success",
          iconColor: "#f4ec11",
          confirmButtonText: "Okay",
          customClass: {
            confirmButton: "bg-amber-400 text-zinc-800 font-body px-32",
            title: "font-head font-bold text-2xls",
          },
        });
      }
    }
    // form.reset();
  };
  return (
    <div>
      <div className="text-center my-10">
        <h2 className="text-2xl font-bold logo-1 tracking-widest text-zinc-900 inline-block border-b-4 border-amber-400 pb-1">
          ADD ITEM
        </h2>
      </div>
      <div>
        <form
          className="grid grid-cols-2 gap-5 w-8/12 mx-auto"
          onSubmit={handleAddItem}
        >
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Name</span>
            </div>
            <input
              type="text"
              placeholder="Name"
              name="name"
              required
              className="input input-bordered w-full "
            />
          </label>
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text">Category</span>
            </div>
            <select
              placeholder="Category"
              name="category"
              required
              className="input input-bordered w-full"
              defaultValue=""
            >
              <option disabled value="">
                Select
              </option>
              <option value="pizza">Pizza</option>
              <option value="salad">Salad</option>
              <option value="soup">Soup</option>
              <option value="dessert">Dessert</option>
              <option value="popular">Popular</option>
              <option value="drinks">Drinks</option>
              <option value="osffered">Offered</option>
            </select>
          </label>
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text">Price</span>
            </div>
            <input
              type="number"
              placeholder="Price"
              name="price"
              required
              className="input input-bordered w-full "
            />
          </label>
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text">Photo</span>
            </div>
            
            <input
              type="file"
              placeholder="Photo" 
              name="photo"
              required
              className="file-input file-input-bordered w-full"
            />
          </label>
          <div>
            
          </div>
          <label className="form-control col-span-2 w-full ">
            <div className="label">
              <span className="label-text">Recipe</span>
            </div>
            <textarea
              rows="4"
              placeholder="Recipe"
              name="recipe"
              required
              className="textarea textarea-bordered w-full "
            />
          </label>

          <div className="col-span-2">
            <button
              type="submit"
              className="btn w-full bg-zinc-900 text-white py-3 rounded-md hover:bg-amber-400 hover:text-black hover:border-black"
            >
              Add Item
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddItem;
