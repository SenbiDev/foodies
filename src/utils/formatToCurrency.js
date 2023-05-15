function formatToCurrency(value) {
    const IDRupiah = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
    });

    return IDRupiah.format(value).replace(',00', '');
}

export default formatToCurrency;