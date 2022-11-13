import wixData from 'wix-data';
import wixLocation from 'wix-location';

$w.onReady(function(){
    loadRelatedProducts();
});

async function loadRelatedProducts() {
    let product = await $w('#productPage').getProduct();
    let relatedProductsResult = await relatedProductsByPrice(product);
    showRelatedProducts(relatedProductsResult);
}

async function relatedProductsByPrice(product) {
    let productId = product._id;

    let relatedByPrice = await wixData.query('Stores/products')
        .between('price', product.price * 0.9, product.price * 1.2)
        .ne('_id', productId)
        .find();

    return relatedByPrice.items;
}

function showRelatedProducts(relatedProducts) {
    if(relatedProducts.length > 0) {
        relatedProducts.splice(4, relatedProducts.length);
        $w('#relatedItemsRepeater').onItemReady(relatedItemReady);
        $w('#relatedItemsRepeater').data = relatedProducts;
        $w('#relatedItems').expand();
    }
    else 
    {
        $w('#relatedItems').collapse();
    }
}

function relatedItemReady($w, product) {
    $w('#productImage').src = product.mainMedia;
    $w('#productName').text = product.name;
    $w('#productPrice').text = product.formattedPrice;
    $w('#productImage').onClick(() => {
        wixLocation.to(product.productPageUrl);
    });

}

async function relatedProductsByTable(product) {
    let productId = product._id;

    let relatedByTable = await Promise.all([
        wixData.query('relatedProducts')
            .eq('productA', productId)
            .include('productB')
            .find(),
        wixData.query('relatedProducts')
            .eq('productB', productId)
            .include('productA')
            .find()
    ]);

    let relatedProducts = [
        ...relatedByTable[0].items.map(_ => _.productB),
        ...relatedByTable[1].items.map(_ => _.productA)
    ];
    return relatedProducts;
}