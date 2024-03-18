const btn = document.querySelector('button')
const pContainer = document.querySelector('.p-container')
document.body.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.key == 'Enter') {
        btn.click()
    }
})
btn.addEventListener('click', () => {
    const container = document.createElement('div')
    document.body.append(container)
    pContainer.append(container)
    pContainer.classList.add('active')
    container.className = 'flex'
    const newEl = document.createElement('input')
    container.append(newEl)
    newEl.focus()
    newEl.addEventListener('keydown', (e) => {
        if (e.key == 'Enter') {
            newEl.className = 'change'
            newEl.blur()
            myfun()
        }
    })
    newEl.addEventListener('click', (e) => {
        newEl.classList.remove('change')


    })
    newEl.addEventListener('keydown', (e) => {
        if ( e.key === 'Delete') {
            container.remove()
        }
    })

    function myfun() {
        // Check if edit and delete buttons already exist
        if (!container.querySelector('button.edit') && !container.querySelector('button.delete')) {
            const edit = document.createElement('button')
            const Delete = document.createElement('button')
            edit.innerText = "Edit"
            Delete.innerText = "Delete"
            edit.classList.add('edit') // Add class for easier targeting
            Delete.classList.add('delete') // Add class for easier targeting
            container.append(edit, Delete)

            edit.addEventListener('click', () => {
                newEl.focus()
                newEl.classList.remove('change')
            })
            Delete.addEventListener('click', () => {
                container.remove()
            })
        }
    }
})