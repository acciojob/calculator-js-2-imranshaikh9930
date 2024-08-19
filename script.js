const display = document.getElementById('display');
        const buttons = document.querySelectorAll('.buttons button');

        buttons.forEach(button => {
            button.addEventListener('click', () => {
                const buttonId = button.id;

                if (buttonId === 'C') {
                    display.value = '';
                } else if (buttonId === 'back') {
                    display.value = display.value.slice(0, -1);
                } else if (buttonId === 'equal') {
                    try {
                        display.value = eval(display.value);
                    } catch {
                        display.value = 'Error';
                    }
                } else {
                    display.value += button.textContent;
                }
            });
        });