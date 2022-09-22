
// array.map( function(value, index, array), this)

//               array : Üzerinde işlem yapılacak olan diziyi belirtir. Bu dizinin her bir elemanı map metotunun içinde belirleyeceğimiz işleme tabi tutulacaktır.
//               value : Üzerinde işlem yapılan dizi değerini belirtir.
//               array : Üzerinde işlem yapılan diziye erişimi sağlar
//               this : Kullanımı zorunlu değildir(opsiyoneldir). this değişkenine iletilecek olan değeri belirtir.

const USERS = ["Ayse", "MehMEt", "VeLi", "MERt"]

const NEW_USERS = USERS.map( user => user.toLowerCase() )
console.log(NEW_USERS)

const USERS_OBJ = USERS.map ( item =>
    {
        return {
            userName: item,
            shortName: `${item[0]}.`,
            newName: `${item[0].toUpperCase()}${item.slice(1).toLowerCase()}`
        }
    }
)
console.log(USERS_OBJ)