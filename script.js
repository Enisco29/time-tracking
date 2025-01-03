// Load data from data.json
fetch('data.json')
    .then(response => response.json())
    .then(data => {

        const renderCards = (timeframe) => {

            data.forEach((item) => {

                const title = item.title.toLowerCase().replace(" ", "-");

                const current = item.timeframes[timeframe].current;
                const previous = item.timeframes[timeframe].previous;

                const currentHour = document.getElementById(`${title}-current`);
                const previousHour = document.getElementById(`${title}-previous`);

                
                if (currentHour && previousHour) {
                    currentHour.textContent = `${current}hrs`;
                    previousHour.textContent = `${previous}hrs`
                }

            });
        };

        
        let currentTimeframe = 'daily'; 

        document.querySelectorAll('.actions').forEach((p) => {
            p.addEventListener('click', () => {
                currentTimeframe = p.dataset.timeframe;
                renderCards(currentTimeframe);
            });
        });

        renderCards(currentTimeframe);
    })


