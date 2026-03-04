document.addEventListener('DOMContentLoaded', () => {

    // --- Scroll Animations (Intersection Observer) ---
    const reveals = document.querySelectorAll('.reveal');

    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealOnScroll = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('active');
                // Optional: Stop observing once revealed
                // observer.unobserve(entry.target);
            }
        });
    }, revealOptions);

    reveals.forEach(reveal => {
        revealOnScroll.observe(reveal);
    });

    // --- Navbar Scroll Effect ---
    const navbar = document.getElementById('navbar');
    const navContainer = document.getElementById('nav-container');
    const navLinksContainers = document.querySelectorAll('nav.hidden.md\\:flex');
    const navTaglines = document.querySelectorAll('.nav-tagline');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('glass-nav');
            navContainer.classList.remove('py-6');
            navContainer.classList.add('py-4');
            navLinksContainers.forEach(container => {
                container.classList.remove('text-sand');
                container.classList.add('text-dark');
            });
            navTaglines.forEach(tagline => {
                tagline.classList.remove('text-sand');
                tagline.classList.add('text-dark');
            });
        } else {
            navbar.classList.remove('glass-nav');
            navContainer.classList.add('py-6');
            navContainer.classList.remove('py-4');
            navLinksContainers.forEach(container => {
                container.classList.remove('text-dark');
                container.classList.add('text-sand');
            });
            navTaglines.forEach(tagline => {
                tagline.classList.remove('text-dark');
                tagline.classList.add('text-sand');
            });
        }
    });

    // --- Mobile Menu Toggle ---
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');
    let isMenuOpen = false;

    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
        if (isMenuOpen) {
            mobileMenu.classList.remove('opacity-0', 'pointer-events-none');
            mobileMenu.classList.add('opacity-100', 'pointer-events-auto');
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        } else {
            mobileMenu.classList.add('opacity-0', 'pointer-events-none');
            mobileMenu.classList.remove('opacity-100', 'pointer-events-auto');
            document.body.style.overflow = '';
        }
    }

    mobileBtn.addEventListener('click', toggleMenu);

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (isMenuOpen) toggleMenu();
        });
    });
    // --- Multi-Product Slider Modal Logic ---
    const collectionData = {
        'kodo': {
            collectionName: 'The Kodo Collection (Japandi Series)',
            products: [
                {
                    title: 'Kodo Lounge Armchair',
                    desc: 'Japandi-inspired sanctuary pieces focusing on the rhythm of vertical lines.',
                    specs: ['Airflow: Woven seat design prevents heat buildup.', 'Protection: Champagne gold metal ferrules on legs to prevent mop-scuffing', 'Dimensions:70cm W x 75cm D x 78cm H'],
                    img: 'images/Kodo.png',
                    imgClass: 'max-h-[80%]',
                    id: 'kodo-slide-img-1'
                },
                {
                    title: 'Kodo Coffee Table',
                    desc: 'Spherical ‘orb’ foot design that brings softness to your seating arrangement.',
                    specs: ['White Marble Top', 'Signature Feet: Low-profile spherical "orb" legsin solid Acacia.', 'Material Mix: Honed White Marble, Wheat-colored Jute Cord, Acacia Wood.', 'Dimensions:90cm Dia.'],
                    img: 'images/kodo2.png',
                    id: 'kodo-slide-img-2'
                },
                {
                    title: 'Kodo TV Console',
                    desc: 'A seamless blend of storage and display with fluted wooden fronts.',
                    specs: ['Marble topCable Management: Rear cutouts in the openshelf section.', 'Durability: Solid marble top prevents scratches from TV stands or décor.', 'Dimensions:160x45x55cm'],
                    img: 'images/kodo3.png',
                    id: 'kodo-slide-img-3'
                },
                {
                    title: 'Kodo Dining Table',
                    desc: 'Pedestal base dining table emphasizing brutalist yet warm geometry.',
                    specs: ['Pedestal Stain Resistant: Sealed Banswara marble top', 'SLegroom: Pedestal base allows unobstructedseating for 6-8 people.', 'Dimensions:200x100x76cm'],
                    img: 'images/kodo4.png',
                    id: 'kodo-slide-img-4'
                }
            ]
        },
        'katha': {
            collectionName: 'The Katha Collection (Soft Geometry Series)',
            products: [
                {
                    title: '\'Haven\' Wood-Frame Sofa',
                    desc: 'Moving away from sharp edges to ‘Soft Geometry’ silhouettes that soften a room.',
                    specs: ['Biscotti Matte Mango Wood', 'Bouclé upholstery', '210cm L x 85cm W x 80cm H'],
                    img: 'images/katha2.png',
                    id: 'katha-slide-img-1'
                },
                {
                    title: 'Katha Capsule Coffee Table',
                    desc: 'Organic capsule shape perfect for centralized living spaces.',
                    specs: ['An oval mango wood table with a raised rim, featuring one solid cylindrical leg and a fluted pillar that hides a pull-out drawer.', 'Mango wood', 'Dimensions (LxWxH) : 110 x 60 x 40 cm'],
                    img: 'images/katha3.png',
                    id: 'katha-slide-img-2'
                },
                {
                    title: 'Nest Stools + Nomad Table Set',
                    desc: 'Flexible dining solution with an integrated butterfly leaf.',
                    specs: ['Triangular rounded solid wood nesting stools and a C-shaped mango wood cantilever table with a terrazzo base that slides under sofas.', 'Solid Mango Wood', 'Dimensions (LxWxH) : Large: 50 x 50 x 45 cm Small: 40 x 40 x 38 cm Laptop Table :45 x 30 x 65 cm'],
                    img: 'images/katha4.png',
                    id: 'katha-slide-img-3'
                },
                {
                    title: '\'Ritual\' Bar Cabinet',
                    desc: 'Elegant bar storage featuring an arch motif and deep-fluted texture.',
                    specs: ['Tall cabinet with deep vertical fluted texture on doors. Mirrored interior with wine rack and glass holders.', 'Mango wood', 'Dimensions:90x45x160cm'],
                    img: 'images/katha5.png',
                    id: 'katha-slide-img-4'
                }
            ]
        },
        'aura': {
            collectionName: 'The Aura-Struct Collection (Industrial Series)',
            products: [
                {
                    title: '\'Loop\' Lounge Chair',
                    desc: 'Redefining industrial design by pairing raw tubular steel with warm wood.',
                    specs: ['Description: A relaxed accent chair defined by a continuous metal loop frame,a suspended sling-style seat, and marble hardware accents.', 'Materials: Tubular Steel, Mango Wood Caps, Greige Performance Fabric.', 'Dimensions:72cm (W) x 80cm (D) x 78cm (H)'],
                    img: 'images/aura2.png',
                    id: 'aura-slide-img-1'
                },
                {
                    title: '\'Pivot-Cloud\' Coffee Station',
                    desc: 'Space-saving mechanical design blending form and function.',
                    specs: ['Description: A dual-function table featuring a mechanical lift-top workspace,hidden storage, and a built-in flush marble coaster.', 'Materials: Sustainable Mango Wood (Matte), Tubular Steel (Black), White Marble.', 'Dimensions: 120cm (L) x 60cm (W) x 45cm (H) (Lift height: 65cm)'],
                    img: 'images/aura3.png',
                    id: 'aura-slide-img-2'
                },
                {
                    title: 'The \"Orbit\" Nesting Console & Ottoman',
                    desc: 'A structural masterpiece featuring a heavy steel I-beam base.',
                    specs: ['Description: A space-saving hallway console featuring a removable marbleserving tray and a fully tucked-away rolling storage ottoman', 'Materials: Mango Wood, Tubular Steel, Marble Tray, Tweed Fabric', '2Dimensions: Console: 110cm x 35cm x 80cm | Ottoman: 45cm Cubem'],
                    img: 'images/aura4.png',
                    id: 'aura-slide-img-3'
                },
                {
                    title: 'The \"Platform\" Bench',
                    desc: 'Designed to slide seamlessly under your sofa for convenient access.',
                    specs: ['Description: A multi-use bench combining a wood seat with an integrated solid marble blockend table for durable utility.', 'Materials: Solid Mango Wood, Solid Marble Block, Tubular Steel.', 'Dimensions: 150cm (L) x 40cm (W) x 45cm (H)'],
                    img: 'images/aura5.png',
                    id: 'aura-slide-img-4'
                }
            ]
        },
        'decor': {
            collectionName: 'Signature Decor (Regency Handicraft Series)',
            products: [
                {
                    title: 'Sunburst Wall Mirror',
                    desc: 'A radiant focal point highlighting meticulous metallic craftsmanship.',
                    specs: ['Hand-carved detailing', 'Antique Brass finish', '80cm Dia.'],
                    img: 'https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&w=800&q=80',
                    id: 'decor-slide-img-1'
                },
                {
                    title: 'Tree of Life Wall Art',
                    desc: 'Large-scale metallic wall installation reflecting nature’s geometric beauty.',
                    specs: ['Textured metal fabrication', 'Matte black & gold', '120x90cm'],
                    img: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80',
                    id: 'decor-slide-img-2'
                },
                {
                    title: 'Animal-Themed Sculptures',
                    desc: 'Desktop and console accents showcasing the EPCH-recognized artistry.',
                    specs: ['Hand-polished brass finishes', 'Abstract forms', 'Various Sizes'],
                    img: 'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=800&q=80',
                    id: 'decor-slide-img-3'
                },
                {
                    title: 'Premium Cutlery Sets',
                    desc: 'Elevate your dining experience with Moradabad’s finest tableware.',
                    specs: ['Traditional Moradabad craftsmanship', 'Ergonomic forms', '16-piece set'],
                    img: 'https://images.unsplash.com/photo-1584343160492-4afc2f829c99?auto=format&fit=crop&w=800&q=80',
                    id: 'decor-slide-img-4'
                }
            ]
        }
    };

    const collectionCards = document.querySelectorAll('.collection-card');
    const modal = document.getElementById('specs-modal');
    const modalBackdrop = document.getElementById('specs-modal-backdrop');
    const modalContent = document.getElementById('specs-modal-content');
    const btnCloseTop = document.getElementById('close-modal-btn');

    // Slider DOM Elements
    const btnPrev = document.getElementById('modal-prev-btn');
    const btnNext = document.getElementById('modal-next-btn');
    const modalCounter = document.getElementById('modal-counter');
    const modalTextContent = document.getElementById('modal-text-content');

    // Content DOM Elements
    const modTitle = document.getElementById('modal-title');
    const modColl = document.getElementById('modal-coll');
    const modDesc = document.getElementById('modal-desc');
    const modSpecsList = document.getElementById('modal-specs-list');
    const modImage = document.getElementById('modal-image');

    let isModalOpen = false;
    let currentCollectionId = null;
    let currentIndex = 0;

    function updateModalUI(direction = 0) {
        if (!currentCollectionId || !collectionData[currentCollectionId]) return;

        const coll = collectionData[currentCollectionId];
        const product = coll.products[currentIndex];

        // Animate content out
        modalTextContent.classList.add('opacity-0');
        if (direction > 0) modImage.classList.add('-translate-x-12', 'opacity-0');
        else if (direction < 0) modImage.classList.add('translate-x-12', 'opacity-0');
        else modImage.classList.add('opacity-0');

        setTimeout(() => {
            // Update Data
            modColl.textContent = coll.collectionName;
            modTitle.textContent = product.title;
            modDesc.textContent = product.desc;
            modImage.src = product.img;
            modImage.id = product.id; // Unique ID per slide image
            modalCounter.textContent = `${currentIndex + 1} / ${coll.products.length}`;

            // Parse specs
            modSpecsList.innerHTML = '';
            product.specs.forEach(spec => {
                const li = document.createElement('li');
                li.className = 'flex items-start';
                li.innerHTML = `<span class="text-walnut mr-3 mt-1 text-[10px]">■</span> <span>${spec}</span>`;
                modSpecsList.appendChild(li);
            });

            // Prepare for slide in
            if (direction > 0) {
                modImage.classList.remove('-translate-x-12');
                modImage.classList.add('translate-x-12');
            } else if (direction < 0) {
                modImage.classList.remove('translate-x-12');
                modImage.classList.add('-translate-x-12');
            }

            // Force reflow
            void modImage.offsetWidth;

            // Animate content in
            modalTextContent.classList.remove('opacity-0');
            modImage.classList.remove('-translate-x-12', 'translate-x-12', 'opacity-0');

        }, 300); // Wait for fade out
    }

    function openModal(collectionId) {
        currentCollectionId = collectionId;
        currentIndex = 0;

        // Initial setup
        updateModalUI(0);

        // Open Animation
        modal.classList.remove('opacity-0', 'pointer-events-none');
        modal.classList.add('opacity-100', 'pointer-events-auto');

        setTimeout(() => {
            modalContent.classList.remove('scale-95', 'opacity-0');
            modalContent.classList.add('scale-100', 'opacity-100');
        }, 50);

        document.body.style.overflow = 'hidden';
        isModalOpen = true;
    }

    function closeModal() {
        if (!isModalOpen) return;

        modalContent.classList.remove('scale-100', 'opacity-100');
        modalContent.classList.add('scale-95', 'opacity-0');

        setTimeout(() => {
            modal.classList.remove('opacity-100', 'pointer-events-auto');
            modal.classList.add('opacity-0', 'pointer-events-none');
            document.body.style.overflow = '';
        }, 300);

        isModalOpen = false;
    }

    // Slider Navigation functions
    function nextSlide() {
        if (!currentCollectionId) return;
        const max = collectionData[currentCollectionId].products.length - 1;
        if (currentIndex < max) currentIndex++;
        else currentIndex = 0;

        updateModalUI(1);
    }

    function prevSlide() {
        if (!currentCollectionId) return;
        const max = collectionData[currentCollectionId].products.length - 1;
        if (currentIndex > 0) currentIndex--;
        else currentIndex = max;

        updateModalUI(-1);
    }

    // Attach Click Event to Cards
    collectionCards.forEach(card => {
        card.addEventListener('click', () => {
            const collId = card.getAttribute('data-collection-id');
            if (collId) openModal(collId);
        });
    });

    // Attach Modal Events
    if (btnCloseTop) btnCloseTop.addEventListener('click', closeModal);
    if (modalBackdrop) modalBackdrop.addEventListener('click', closeModal);
    if (btnNext) btnNext.addEventListener('click', nextSlide);
    if (btnPrev) btnPrev.addEventListener('click', prevSlide);

    // --- Google Form Submission Logic (Fetch API) ---
    const inquiryForm = document.getElementById('business-inquiry-form');
    const successMsg = document.getElementById('form-success-message');

    if (inquiryForm && successMsg) {
        inquiryForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Stop normal form submission

            // Create FormData from the form
            const formData = new FormData(inquiryForm);

            // Send a hidden POST request to Google Apps Script
            const submitBtn = inquiryForm.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn.textContent;
            submitBtn.textContent = "Sending...";
            submitBtn.disabled = true;

            fetch(inquiryForm.action, {
                method: 'POST',
                body: formData
            }).then(response => {
                // If it resolves, assume success (Apps Script CORS redirects might mask the JSON output but the request succeeds)
                inquiryForm.reset();

                // Keep the form fields clean, and display the thank you message
                successMsg.classList.remove('hidden');

                // Optionally hide the success message after 5 seconds
                setTimeout(() => {
                    successMsg.classList.add('hidden');
                }, 5000);
            }).catch(error => {
                console.error('Error submitting form:', error);
                alert("There was a problem submitting your inquiry. Please try again.");
            }).finally(() => {
                submitBtn.textContent = originalBtnText;
                submitBtn.disabled = false;
            });
        });
    }

});
