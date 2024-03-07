export default function Hero() {
    return (
        <header style={{ paddingLeft: 0 }}>
            <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
                <div
                    className='p-5 text-center'
                    style={{ backgroundImage: "url('https://r.lvmh-static.com/uploads/2023/01/site-news-cover-2-givenchy-fw23-2-1584x872.png')", height: 600 }}>
                    <div className='d-flex justify-content-center align-items-center h-100'>
                        <div className='text-dark'>
                            <h1 className='mb-3'>Automne-Hiver 2024</h1>
                            <button className='btn btn-outline-dark btn-lg'>Nouvelle collection</button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
      );
}