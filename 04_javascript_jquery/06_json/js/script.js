let $container=$('.gallery'),
    $loadMoreBtn=$('.load-more'),
    $addItemCount=8, //버튼 클릭할 때마다 나오는 갯수
    $added=0, //더보기 버튼을 사라지게 만드는 변수
    $allData=[]; //json파일을 불러와서 집어넣을 공간 = 배열구조

$.getJSON('./data/content.json',initGallery);//html파일을 기준으로 경로를 설정해줘야 함

function initGallery(data){
    $allData=data;
    //console.log($allData);
    addItem();
    $loadMoreBtn.click(addItem);
};

$container.masonry({
    // options
    itemSelector: '.gallery-item',
    columnWidth: 270,
    gutter:20
  });


function addItem(){
    let elements=[];
    let slicedData=null;

    slicedData=$allData.slice($added, $added+=$addItemCount);
    //console.log(slicedData);

    $.each(slicedData, function(index, item){
        let itemHTML=
        '<li class="gallery-item">' +
                '<a href="#">' +
                    '<figure>' +
                        '<img src=""'+ item.images.thumb +'alt="'+item.title+'">' +
                        '<figcaption>' +
                            item.title +
                        '</figcaption>' +
                    '</figure>' +
                '</a>' +
            '</li>'

            elements.push($(itemHTML).get(0));
    });
    $container.append(elements);
    //$added += slicedData.length;
    if($added<$allData.length){
        $loadMoreBtn.show()
    }else{
        $loadMoreBtn.hide()
    }

    $container.imagesLoaded(function(){
        $container.masonry('appended', elements)
    })
}