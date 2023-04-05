removeGalleryItem = (btn) => {
    const postId = $(btn).attr("postid");
    const imgId = $(btn).attr("imgid");

    fetch(`/admin/deleteGallery/${postId}/${imgId}`, {
        method: 'DELETE'
    })
        .then(response => {
            return response.json();
        })
        .then(data => {
            if (data.message == "success") {
                $(btn).parent().remove();
            }
            else {
                console.error("Error, data not deleted");
            }
        })
}

$(".del-gallery").click((event) => {
    event.preventDefault();
})