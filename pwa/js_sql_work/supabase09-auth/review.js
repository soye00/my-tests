const supabaseUrl = "https://zgrjjnifqoactpuqolao.supabase.co";
const supabaseAnonkey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpncmpqbmlmcW9hY3RwdXFvbGFvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDEyNDc0NTgsImV4cCI6MjA1NjgyMzQ1OH0._Vl-6CRKdMjeDRyNoxlfect7sgusZ7L0N5OYu0a5hT0";

const supabase = window.supabase.createClient(supabaseUrl, supabaseAnonkey);


async function selectReview() {

    const params = new URLSearchParams(window.location.search);
    const pageNum = params.get("pageNum") || 1;

    const [from, to] = [(pageNum-1)*10,(pageNum *10)-1]

    const res = await supabase.from('review').select().range(0, 9);
    console.log(res);

    const $reviewList = document.getElementById('review-list');
    // 안에 있는거 없애기...
    $reviewList.innerHTML = '';

    res.data.forEach(review => {
        const reviewDiv = document.createElement('div');
        reviewDiv.style.display = 'flex';
        reviewDiv.style.border = '1px solid black';
        reviewDiv.style.borderCollapse = 'collapse';

        if(review.file_url === null){
            reviewDiv.innerHTML = `
            <div style='width: 150px; padding:1rem; border-right: 1px solid black;'>
                <h3>${review.title}</h3>
            </div>
            <div style="padding: 1rem"> 
            </div>    
        `
        }else{
            reviewDiv.innerHTML = `
            <div style='width: 150px; padding:1rem;'>
                <h3>${review.title}</h3>
            </div>
            <div style="padding: 1rem">    
                <img src="${review.file_url}" alt="${review.file_url}" width="100">
            </div>    
        `
        }

        $reviewList.appendChild(reviewDiv);
    })

}

selectReview();