import React from 'react'

 const Category = () => {
    return (
        <>
            <div className="open_menu">

                <span>
                    <button style={{ display: 'flex', textAlign: 'center' }} class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">
                        <div className="burger">
                            <svg xmlns="http://www.w3.org/2000/svg" color='ffff' height="1.3em" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" /></svg>
                        </div>
                        <span style={{ textTransform: 'uppercase' }}>Категории</span>
                    </button>

                    <div class="offcanvas offcanvas-top bg-white-50" tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="offcanvasTopLabel">Пока нет категории...</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">

                        </div>
                    </div>

                </span>

            </div>
        </>
    )
}
export default Category
