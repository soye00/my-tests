document.querySelector('#input-text').addEventListener('click',async function (){
    const post = document.querySelector('#product_text').value;

    if(post.length === 0){
        await Swal.fire({
            icon: "error",
            title: "입력실패",
            text: "email 빈값입니다!",
            // footer: '<a href="#">Why do I have this issue?</a>'
        });
        document.querySelector('#product_text').focus();
        return;
    }

    const res = await supabase
        .from('post')
        .insert([
            {post}
        ])
        .select();

})

