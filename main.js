function adddata() {
    // الحصول على القيم من النموذج
    let field0 = document.getElementById('field0').value;
    let field1 = document.getElementById('field1').value;
    let field2 = document.getElementById('field2').value;
    let field3 = document.getElementById('field3').value;
    let field4 = document.getElementById('field4').value;

    // التحقق من أن جميع الحقول قد تم ملؤها
    if (field1 === '' || field2 === '' || field3 === '' || field4 === '') {
        alert('يرجى ملء جميع الحقول');
        return;
    }

    let tableBody = document.querySelector('#dataTable tbody');

    let newRow = document.createElement('tr');

    let cell1 = document.createElement('td');
    cell1.textContent = field0;
    let cell2 = document.createElement('td');
    cell2.textContent = field1;
    let cell3 = document.createElement('td');
    cell3.textContent = field2;
    let cell4 = document.createElement('td');
    cell4.textContent = field3;
    let cell5 = document.createElement('td');
    cell5.textContent = field4;

    newRow.appendChild(cell1);
    newRow.appendChild(cell2);
    newRow.appendChild(cell3);
    newRow.appendChild(cell4);
    newRow.appendChild(cell5);

    tableBody.appendChild(newRow);

    // مسح القيم من النموذج بعد الإضافة
    document.getElementById('dataForm').reset();
}