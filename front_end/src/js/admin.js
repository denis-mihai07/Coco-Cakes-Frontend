const backend_url = "https://api-cococakes.birtalandenis.com";

const f = async () => {
  let images = [];
  try {
    const images_res = await fetch(`${backend_url}/get-images`, {
      method: "GET",
    });
    images = await images_res.json();
    console.log(images);
  } catch (err) {
    console.error("Fetch error at /get-images: ", err);
  }

  const products_images = document.querySelectorAll(
    ".products_content_image > img",
  );
  const prices_images = document.querySelectorAll(".prices_item_image > img");

  console.log(images);

  products_images.forEach((img, index) => {
    let slot;
    images.forEach((image, i) => {
      if (image.slot == index + 1) slot = i;
    });
    if (slot) img.src = images[slot].url;
  });

  prices_images.forEach((img, index) => {
    let slot;
    images.forEach((image, i) => {
      if (image.slot == index + 1 + 5) slot = i;
    });
    if (slot) img.src = images[slot].url;
  });
};

f();
