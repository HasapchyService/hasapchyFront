# Миксины (Mixins)

## 📁 Описание миксинов и их методов

### 1. `formChangesMixin.js`
**Назначение:** Отслеживание изменений в формах и предотвращение потери данных

**Data:**
- `initialFormState` - начальное состояние формы
- `closeConfirmDialog` - диалог подтверждения закрытия
- `isFormInitialized` - флаг инициализации формы

**Methods:**
- `saveInitialState()` - сохранение начального состояния формы
- `getFormState()` - получение текущего состояния формы (переопределяется в компоненте)
- `checkForChanges()` - проверка наличия изменений
- `handleCloseRequest()` - обработка попытки закрытия формы
- `confirmClose()` - подтверждение закрытия
- `cancelClose()` - отмена закрытия
- `closeForm()` - закрытие формы (эмит close-request)
- `handleBeforeUnload()` - обработчик beforeunload для предотвращения закрытия браузера
- `resetFormChanges()` - сброс состояния изменений
- `resetFormInitialization()` - сброс флага инициализации

### 2. `modalMixin.js`
**Назначение:** Управление модальными окнами

**Data:**
- `modalDialog` - состояние модального окна
- `editingItem` - редактируемый элемент
- `showTimeline` - показ временной шкалы

**Methods:**
- `showModal(item)` - показать модальное окно
- `closeModal()` - закрыть модальное окно

### 3. `batchActionsMixin.js`
**Назначение:** Массовые операции с элементами

**Data:**
- `loadingBatch` - состояние загрузки массовых операций
- `deleteDialog` - диалог удаления
- `idsToDelete` - ID элементов для удаления

**Methods:**
- `deleteItems(ids)` - удаление элементов по ID
- `confirmDeleteItems()` - подтверждение удаления элементов
- `getBatchActions()` - получение списка массовых действий

### 4. `crudEventMixin.js`
**Назначение:** Обработка событий CRUD операций

**Methods:**
- `handleSaved()` - обработка успешного сохранения
- `handleSavedError(m)` - обработка ошибки сохранения
- `handleDeleted()` - обработка успешного удаления
- `handleDeletedError(m)` - обработка ошибки удаления

### 5. `getApiErrorMessageMixin.js`
**Назначение:** Обработка ошибок API

**Methods:**
- `getApiErrorMessage(error)` - получение сообщения об ошибке из API

### 6. `notificationMixin.js`
**Назначение:** Управление уведомлениями

**Data:**
- `notification` - состояние уведомления
- `notificationTitle` - заголовок уведомления
- `notificationSubtitle` - подзаголовок уведомления
- `notificationIsDanger` - флаг опасного уведомления
- `notificationTimeoutId` - ID таймера уведомления

**Methods:**
- `showNotification(title, subtitle, isDanger, duration)` - показать уведомление
- `closeNotification()` - закрыть уведомление
- `pauseNotificationTimer()` - приостановить таймер уведомления
- `resumeNotificationTimer()` - возобновить таймер уведомления

### 7. `tableTranslationMixin.js`
**Назначение:** Перевод заголовков таблиц

**Computed:**
- `translatedColumnsConfig` - конфигурация колонок с переводами

## 🔄 Конфликты и дублирование методов

### ⚠️ Дублирование методов в компонентах

**Обнаружено дублирование методов между миксинами и компонентами:**

1. **`handleSaved()`** - дублируется в:
   - `crudEventMixin.js` (миксин)
   - `CashRegistersPage.vue` (компонент)

2. **`handleSavedError()`** - дублируется в:
   - `crudEventMixin.js` (миксин) 
   - `CashRegistersPage.vue` (компонент)

3. **`handleDeleted()`** - дублируется в:
   - `crudEventMixin.js` (миксин)
   - `CashRegistersPage.vue` (компонент)

4. **`handleDeletedError()`** - дублируется в:
   - `crudEventMixin.js` (миксин)
   - `CashRegistersPage.vue` (компонент)

### ✅ Уникальные методы миксинов

- `modalMixin.js` - `closeModal()`, `showModal()`
- `formChangesMixin.js` - `closeForm()`, `getFormState()`, `saveInitialState()`, `resetFormChanges()`
- `batchActionsMixin.js` - `deleteItems()`, `confirmDeleteItems()`, `getBatchActions()`
- `getApiErrorMessageMixin.js` - `getApiErrorMessage()`
- `notificationMixin.js` - `showNotification()`, `closeNotification()`
- `tableTranslationMixin.js` - `translatedColumnsConfig` (computed)

### 🔧 Рекомендации

1. **✅ ИСПРАВЛЕНО:** Дублирующиеся методы удалены из компонентов
2. **✅ ИСПРАВЛЕНО:** Добавлен `crudEventMixin` в страницы списков
3. **✅ ИСПРАВЛЕНО:** Настроены тексты через `savedSuccessText`, `savedErrorText` и т.д.

### 📝 Исправленные файлы

- `CashRegistersPage.vue` - добавлен `crudEventMixin`, удалены дублирующиеся методы
- `ClientsPage.vue` - добавлен `crudEventMixin`, удалены дублирующиеся методы
- `InvoicesPage.vue` - добавлены `crudEventMixin` и `tableTranslationMixin`, удалены дублирующиеся методы
- `CompaniesPage.vue` - добавлен `crudEventMixin`, удалены дублирующиеся методы
- `OrderAdditionalFieldsPage.vue` - добавлены `crudEventMixin` и `tableTranslationMixin`, удалены дублирующиеся методы
- `OrderCategoriesPage.vue` - добавлен `crudEventMixin`, удалены дублирующиеся методы
- `OrderStatusesPage.vue` - добавлен `crudEventMixin`, удалены дублирующиеся методы
- `OrdersPage.vue` - добавлены `crudEventMixin` и `tableTranslationMixin`, удалены дублирующиеся методы
- `ProductsPage.vue` - добавлен `crudEventMixin`, удалены дублирующиеся методы
- `ServicesPage.vue` - добавлен `crudEventMixin`, удалены дублирующиеся методы
- `ProjectsPage.vue` - добавлен `crudEventMixin`, удалены дублирующиеся методы
- `SalesPage.vue` - добавлены `crudEventMixin` и `tableTranslationMixin`, удалены дублирующиеся методы
- `TransactionsPage.vue` - добавлены `crudEventMixin` и `tableTranslationMixin`, удалены дублирующиеся методы
- `TransfersPage.vue` - добавлены `crudEventMixin` и `tableTranslationMixin`, удалены дублирующиеся методы
- `UsersPage.vue` - добавлен `crudEventMixin`, удалены дублирующиеся методы
- `WarehousesMovementPage.vue` - добавлены `crudEventMixin` и `tableTranslationMixin`, удалены дублирующиеся методы
- `WarehousesReceiptPage.vue` - добавлены `crudEventMixin` и `tableTranslationMixin`, удалены дублирующиеся методы
- `WarehousesWriteoffPage.vue` - добавлены `crudEventMixin` и `tableTranslationMixin`, удалены дублирующиеся методы
- `WarehousesStockPage.vue` - добавлен `tableTranslationMixin`, удален дублирующийся computed
- `CategoriesPage.vue` - добавлен `crudEventMixin`, удалены дублирующиеся методы

### 🎯 Результат

Теперь все CRUD операции используют миксины, что обеспечивает:
- Единообразную обработку событий
- Легкость поддержки
- Отсутствие дублирования кода
