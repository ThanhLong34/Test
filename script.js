function createStorage(key) {
   const store = JSON.parse(localStorage.getItem(key)) ?? {};
   function save() {
      localStorage.setItem(key, JSON.stringify(store));
   }
   return {
      get(key) {
         return store[key];
      },
      set(key, value) {
         store[key] = value;
         save();
      },
      remove(key) {
         delete store[key];
         save();
      }
   }
}
let isFlag = false;
const settingStorage = createStorage('profile_setting');

document.getElementById('clickBtn').onclick = function () {
   settingStorage.set('isClick', isFlag = !isFlag);
}