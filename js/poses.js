$(document).ready(function() {
    const poses = [
        {
            name: "Jumping Jacks",
            type: "Cardio",
            benefit: "Full Body",
            general: "Warm-up",
            anatomy: "Legs, Arms, Core",
            description: "A full body exercise that you can do anywhere.",
            dos: ["Keep your core engaged.", "Land softly on your feet."],
            donts: ["Don't arch your back.", "Don't let your knees collapse inward."],
            image: "../images/poses/jumping-jacks.jpg"
        },
        {
            name: "High Knees",
            type: "Cardio",
            benefit: "Cardiovascular Health",
            general: "Warm-up",
            anatomy: "Legs, Core",
            description: "A great way to get your heart rate up.",
            dos: ["Keep your back straight.", "Drive your knees up towards your chest."],
            donts: ["Don't lean back.", "Don't stomp your feet."],
            image: "../images/poses/high-knees.jpg"
        },
        {
            name: "Burpees",
            type: "Cardio",
            benefit: "Full Body",
            general: "Strength",
            anatomy: "Legs, Arms, Core, Chest",
            description: "A challenging full-body exercise.",
            dos: ["Keep your core engaged throughout the movement.", "Explode up from the bottom of the squat."],
            donts: ["Don't let your hips sag.", "Don't round your back."],
            image: "../images/poses/burpees.jpg"
        },
        {
            name: "Mountain Climbers",
            type: "Cardio",
            benefit: "Core Strength",
            general: "Strength",
            anatomy: "Core, Legs, Arms",
            description: "A great exercise for building core strength and stability.",
            dos: ["Keep your back flat.", "Drive your knees towards your chest."],
            donts: ["Don't let your hips sag.", "Don't bounce."],
            image: "../images/poses/mountain-climbers.jpg"
        }
    ];

    const urlParams = new URLSearchParams(window.location.search);
    const filter = urlParams.get('filter');

    let filteredPoses = poses;

    if (filter) {
        $(`.list-group-item[href*='${filter}']`).addClass('active');
        filteredPoses = poses.filter(pose => pose.type.toLowerCase().includes(filter) || pose.benefit.toLowerCase().includes(filter) || pose.general.toLowerCase().includes(filter) || pose.anatomy.toLowerCase().includes(filter));
    }

    const $posesContainer = $('#poses-container');
    $posesContainer.empty();

    if (filteredPoses.length > 0) {
        filteredPoses.forEach(pose => {
            const poseCard = `
                <div class="col-md-4 mb-4">
                    <div class="card">
                        <img src="${pose.image}" class="card-img-top" alt="${pose.name}">
                        <div class="card-body">
                            <h5 class="card-title">${pose.name}</h5>
                            <p class="card-text">${pose.description}</p>
                            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#poseModal-${pose.name.replace(/\s+/g, '-').toLowerCase()}">
                                View Details
                            </button>
                        </div>
                    </div>
                </div>

                <div class="modal fade" id="poseModal-${pose.name.replace(/\s+/g, '-').toLowerCase()}" tabindex="-1" aria-labelledby="poseModalLabel-${pose.name.replace(/\s+/g, '-').toLowerCase()}" aria-hidden="true">
                    <div class="modal-dialog modal-lg">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="poseModalLabel-${pose.name.replace(/\s+/g, '-').toLowerCase()}">${pose.name}</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div class="row">
                                    <div class="col-md-6">
                                        <img src="${pose.image}" class="img-fluid" alt="${pose.name}">
                                    </div>
                                    <div class="col-md-6">
                                        <p><strong>Description:</strong> ${pose.description}</p>
                                        <p><strong>Type:</strong> ${pose.type}</p>
                                        <p><strong>Benefit:</strong> ${pose.benefit}</p>
                                        <p><strong>General:</strong> ${pose.general}</p>
                                        <p><strong>Anatomy:</strong> ${pose.anatomy}</p>
                                        <h5>Do's:</h5>
                                        <ul>
                                            ${pose.dos.map(d => `<li>${d}</li>`).join('')}
                                        </ul>
                                        <h5>Don'ts:</h5>
                                        <ul>
                                            ${pose.donts.map(d => `<li>${d}</li>`).join('')}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            $posesContainer.append(poseCard);
        });
    } else {
        $posesContainer.append('<p class="text-center">No poses found for this filter.</p>');
    }
});
