// CATEGORY
let menuBtns = document.getElementsByClassName('menu-btn');
Array.from(menuBtns).forEach(function (btn) {
    btn.addEventListener('click', function () {
        let id = this.id;
        let click = document.getElementById('list-items-'+id);
        let show = document.getElementsByClassName('show');
        if(click.classList.contains('show'))
        {
           click.classList.remove('show') 
        }
        else {
            Array.from(show).forEach(function (item){
                item.classList.remove('show');
            });

            click.classList.add('show')
        }

    });
});

// CATEGORY
document.addEventListener("DOMContentLoaded", function () {
    const productsData = [
        {
            id: 1,
            imgSrc: "https://data-service.pharmacity.io/pmc-upload-media/production/pmc-ecm-core/products/P12581_1_l.webp",
            alt: "post",
            category:"Thuốc không kê đơn",
            name: "Acetylcystein 200 Imexpharm (10 vỉ x 10 viên)",
            price: 147005, 
            info:  "Hoạt chất: Acetylcysteine. Công dụng: Điều trị các bệnh lý đường hô hấp có đờm nhầy quánh như viêm phế quản cấp và mạn. Đối tượng sử dụng: Người lớn/ trẻ em trên 2 tuổi. Hình thức: Viên nang cứng. Thương hiệu: Imexpharm. Nơi sản xuất: Việt Nam. *Thuốc chỉ dùng theo đơn của bác sĩ",
            decription: "Thành phần. Acetylcysteine 200mg. Tá dược: Đường trắng, Mannitol, Dinatri hydrophosphat khan, Bột mùi dâu, Aspartam, Colloidal anhydrous silica. Chỉ định (Thuốc dùng cho bệnh gì?). Thuốc Acetylcystein 200 mg được chỉ định dùng trong các trường hợp sau:. - Điều trị các bệnh lý đường hô hấp có đờm nhầy quánh như viêm phế quản cấp và mạn. - Dùng làm thuốc tiêu chất nhầy trong bệnh nhầy nhớt (mucoviscidosis) như xơ nang tuyến tụy.",
            subImg: "https://data-service.pharmacity.io/pmc-upload-media/production/pmc-ecm-core/products/P12581_2_l.webp"
            // addDecription: "Chống chỉ định (Khi nào không nên dùng thuốc này?) Thuốc Acetylcystein 200 mg chống chỉ định trong các trường hợp sau - Quá mẫn với acetylcystein hay bất kỳ thành phần nào của thuốc. - Người có tiền sử hen (nguy cơ phản ứng co thắt phế quản với tất cả các dạng thuốc chứa acetylcystein). - Trẻ em dưới 2 tuổi. Liều dùng và cách dùng - Dạng bào chế của viên nang cứng Acetylcystein 200mg không thích hợp sử dụng cho trẻ em từ 2 đến 6 tuổi. - Người lớn và trẻ em trên 6 tuổi: 1 viên/lần x 3 lần/ngày. Lưu ý: Liều dùng trên chỉ mang tính chất tham khảo. Liều dùng cụ thể tùy thuộc vào thể trạng và mức độ diễn tiến của bệnh. Để có liều dùng phù hợp, bạn cần tham khảo ý kiến bác sĩ hoặc chuyên viên y tế. Tác dụng phụ Khi sử dụng thuốc Acetylcystein 200 mg bạn có thể gặp các tác dụng không mong muốn (ADR). Thường gặp, ADR > 1/100 - Buồn nôn, nôn. Ít gặp, 1/1000 < ADR < 1/100 - Buồn ngủ, nhức đầu, ù tai, viêm miệng, chảy nước mũi nhiều, phát ban, mày đay. Hiếm gặp, ADR < 1/1000 - Co thắt phế quản kèm phản ứng dạng phản vệ toàn thân, sốt, rét run. Hướng dẫn cách xử trí ADR - Khi gặp tác dụng phụ của thuốc, cần ngưng sử dụng và thông báo cho bác sĩ hoặc đến cơ sở y tế gần nhất để được xử trí kịp thời. Thận trọng (Những lưu ý khi dùng thuốc) - Cần giám sát chặt chẽ người có tiền sử dị ứng vì có nguy cơ phát hen. - Nếu có co thắt phế quản, phải dùng thuốc phun mù giãn phế quản như salbutamol (thuốc beta-2 adrenergic chọn lọc, tác dụng ngắn) hoặc ipratropium (thuốc kháng muscarin) và phải ngừng sử dụng acetylcystein. - Khi điều trị với acetylcystein, có thể xuất hiện nhiều đờm loãng ở phế quản, cần phải hút để lấy ra nếu người bệnh giảm khả năng ho. Sử dụng thuốc cho phụ nữ có thai và cho con bú: - Phụ nữ có thai: Thuốc dùng được cho phụ nữ có thai. - Phụ nữ cho con bú: Thuốc dùng được cho phụ nữ đang cho con bú. Ảnh hưởng của thuốc lên khả năng lái xe, vận hành máy móc - Thuốc không ảnh hưởng đến khả năng lái xe và vận hành máy móc. Tương tác thuốc (Những lưu ý khi dùng chung thuốc với thực phẩm hoặc thuốc khác) - Acetylcystein là một chất khử nên không phù hợp với các chất oxy - hóa. - Không được dùng đồng thời các thuốc ho khác hoặc bất cứ thuốc nào làm giảm bài tiết phế quản trong thời gian điều trị bằng acetylcystein. Bảo quản: Nhiệt độ dưới 30°C, tránh ẩm và ánh sáng Đóng gói: Hộp 10 vỉ x 10 viên Thương hiệu: Imexpharm Nơi sản xuất: Việt Nam Mọi thông tin trên đây chỉ mang tính chất tham khảo. Việc sử dụng thuốc phải tuân theo hướng dẫn của bác sĩ, dược sĩ. Vui lòng đọc kĩ thông tin chi tiết ở tờ rơi bên trong hộp sản phẩm."
            
        },
        {   
            id: 2,
            imgSrc: "https://data-service.pharmacity.io/pmc-upload-media/production/pmc-ecm-core/products/P14798_1_l.webp",
            alt: "post",
            category:"Thuốc không kê đơn",
            name: "Acetylcystein 200 Imexpharm (10 vỉ x 10 viên)",
            price: 147001, 
            info:  "Hoạt chất: Acetylcysteine. Công dụng: Điều trị các bệnh lý đường hô hấp có đờm nhầy quánh như viêm phế quản cấp và mạn. Đối tượng sử dụng: Người lớn/ trẻ em trên 2 tuổi. Hình thức: Viên nang cứng. Thương hiệu: Imexpharm. Nơi sản xuất: Việt Nam. *Thuốc chỉ dùng theo đơn của bác sĩ",
            decription: "Thành phần. Acetylcysteine 200mg. Tá dược: Đường trắng, Mannitol, Dinatri hydrophosphat khan, Bột mùi dâu, Aspartam, Colloidal anhydrous silica. Chỉ định (Thuốc dùng cho bệnh gì?). Thuốc Acetylcystein 200 mg được chỉ định dùng trong các trường hợp sau:. - Điều trị các bệnh lý đường hô hấp có đờm nhầy quánh như viêm phế quản cấp và mạn. - Dùng làm thuốc tiêu chất nhầy trong bệnh nhầy nhớt (mucoviscidosis) như xơ nang tuyến tụy.",
            subImg: "https://data-service.pharmacity.io/pmc-upload-media/production/pmc-ecm-core/products/P12581_2_l.webp"
            
            // addDecription: "Chống chỉ định (Khi nào không nên dùng thuốc này?) Thuốc Acetylcystein 200 mg chống chỉ định trong các trường hợp sau - Quá mẫn với acetylcystein hay bất kỳ thành phần nào của thuốc. - Người có tiền sử hen (nguy cơ phản ứng co thắt phế quản với tất cả các dạng thuốc chứa acetylcystein). - Trẻ em dưới 2 tuổi. Liều dùng và cách dùng - Dạng bào chế của viên nang cứng Acetylcystein 200mg không thích hợp sử dụng cho trẻ em từ 2 đến 6 tuổi. - Người lớn và trẻ em trên 6 tuổi: 1 viên/lần x 3 lần/ngày. Lưu ý: Liều dùng trên chỉ mang tính chất tham khảo. Liều dùng cụ thể tùy thuộc vào thể trạng và mức độ diễn tiến của bệnh. Để có liều dùng phù hợp, bạn cần tham khảo ý kiến bác sĩ hoặc chuyên viên y tế. Tác dụng phụ Khi sử dụng thuốc Acetylcystein 200 mg bạn có thể gặp các tác dụng không mong muốn (ADR). Thường gặp, ADR > 1/100 - Buồn nôn, nôn. Ít gặp, 1/1000 < ADR < 1/100 - Buồn ngủ, nhức đầu, ù tai, viêm miệng, chảy nước mũi nhiều, phát ban, mày đay. Hiếm gặp, ADR < 1/1000 - Co thắt phế quản kèm phản ứng dạng phản vệ toàn thân, sốt, rét run. Hướng dẫn cách xử trí ADR - Khi gặp tác dụng phụ của thuốc, cần ngưng sử dụng và thông báo cho bác sĩ hoặc đến cơ sở y tế gần nhất để được xử trí kịp thời. Thận trọng (Những lưu ý khi dùng thuốc) - Cần giám sát chặt chẽ người có tiền sử dị ứng vì có nguy cơ phát hen. - Nếu có co thắt phế quản, phải dùng thuốc phun mù giãn phế quản như salbutamol (thuốc beta-2 adrenergic chọn lọc, tác dụng ngắn) hoặc ipratropium (thuốc kháng muscarin) và phải ngừng sử dụng acetylcystein. - Khi điều trị với acetylcystein, có thể xuất hiện nhiều đờm loãng ở phế quản, cần phải hút để lấy ra nếu người bệnh giảm khả năng ho. Sử dụng thuốc cho phụ nữ có thai và cho con bú: - Phụ nữ có thai: Thuốc dùng được cho phụ nữ có thai. - Phụ nữ cho con bú: Thuốc dùng được cho phụ nữ đang cho con bú. Ảnh hưởng của thuốc lên khả năng lái xe, vận hành máy móc - Thuốc không ảnh hưởng đến khả năng lái xe và vận hành máy móc. Tương tác thuốc (Những lưu ý khi dùng chung thuốc với thực phẩm hoặc thuốc khác) - Acetylcystein là một chất khử nên không phù hợp với các chất oxy - hóa. - Không được dùng đồng thời các thuốc ho khác hoặc bất cứ thuốc nào làm giảm bài tiết phế quản trong thời gian điều trị bằng acetylcystein. Bảo quản: Nhiệt độ dưới 30°C, tránh ẩm và ánh sáng Đóng gói: Hộp 10 vỉ x 10 viên Thương hiệu: Imexpharm Nơi sản xuất: Việt Nam Mọi thông tin trên đây chỉ mang tính chất tham khảo. Việc sử dụng thuốc phải tuân theo hướng dẫn của bác sĩ, dược sĩ. Vui lòng đọc kĩ thông tin chi tiết ở tờ rơi bên trong hộp sản phẩm."

        },
        {
            id: 3,
            imgSrc: "https://data-service.pharmacity.io/pmc-upload-media/production/pmc-ecm-core/products/P26148_1.jpg",
            alt: "post",
            category:"Thuốc kê đơn",
            name: "Acetylcystein 200 Imexpharm (10 vỉ x 10 viên)",
            price: 147002, 
            info:  "Hoạt chất: Acetylcysteine. Công dụng: Điều trị các bệnh lý đường hô hấp có đờm nhầy quánh như viêm phế quản cấp và mạn. Đối tượng sử dụng: Người lớn/ trẻ em trên 2 tuổi. Hình thức: Viên nang cứng. Thương hiệu: Imexpharm. Nơi sản xuất: Việt Nam. *Thuốc chỉ dùng theo đơn của bác sĩ",
            decription: "Thành phần. Acetylcysteine 200mg. Tá dược: Đường trắng, Mannitol, Dinatri hydrophosphat khan, Bột mùi dâu, Aspartam, Colloidal anhydrous silica. Chỉ định (Thuốc dùng cho bệnh gì?). Thuốc Acetylcystein 200 mg được chỉ định dùng trong các trường hợp sau:. - Điều trị các bệnh lý đường hô hấp có đờm nhầy quánh như viêm phế quản cấp và mạn. - Dùng làm thuốc tiêu chất nhầy trong bệnh nhầy nhớt (mucoviscidosis) như xơ nang tuyến tụy.",
            subImg: "https://data-service.pharmacity.io/pmc-upload-media/production/pmc-ecm-core/products/P12581_2_l.webp"
            
            // addDecription: "Chống chỉ định (Khi nào không nên dùng thuốc này?) Thuốc Acetylcystein 200 mg chống chỉ định trong các trường hợp sau - Quá mẫn với acetylcystein hay bất kỳ thành phần nào của thuốc. - Người có tiền sử hen (nguy cơ phản ứng co thắt phế quản với tất cả các dạng thuốc chứa acetylcystein). - Trẻ em dưới 2 tuổi. Liều dùng và cách dùng - Dạng bào chế của viên nang cứng Acetylcystein 200mg không thích hợp sử dụng cho trẻ em từ 2 đến 6 tuổi. - Người lớn và trẻ em trên 6 tuổi: 1 viên/lần x 3 lần/ngày. Lưu ý: Liều dùng trên chỉ mang tính chất tham khảo. Liều dùng cụ thể tùy thuộc vào thể trạng và mức độ diễn tiến của bệnh. Để có liều dùng phù hợp, bạn cần tham khảo ý kiến bác sĩ hoặc chuyên viên y tế. Tác dụng phụ Khi sử dụng thuốc Acetylcystein 200 mg bạn có thể gặp các tác dụng không mong muốn (ADR). Thường gặp, ADR > 1/100 - Buồn nôn, nôn. Ít gặp, 1/1000 < ADR < 1/100 - Buồn ngủ, nhức đầu, ù tai, viêm miệng, chảy nước mũi nhiều, phát ban, mày đay. Hiếm gặp, ADR < 1/1000 - Co thắt phế quản kèm phản ứng dạng phản vệ toàn thân, sốt, rét run. Hướng dẫn cách xử trí ADR - Khi gặp tác dụng phụ của thuốc, cần ngưng sử dụng và thông báo cho bác sĩ hoặc đến cơ sở y tế gần nhất để được xử trí kịp thời. Thận trọng (Những lưu ý khi dùng thuốc) - Cần giám sát chặt chẽ người có tiền sử dị ứng vì có nguy cơ phát hen. - Nếu có co thắt phế quản, phải dùng thuốc phun mù giãn phế quản như salbutamol (thuốc beta-2 adrenergic chọn lọc, tác dụng ngắn) hoặc ipratropium (thuốc kháng muscarin) và phải ngừng sử dụng acetylcystein. - Khi điều trị với acetylcystein, có thể xuất hiện nhiều đờm loãng ở phế quản, cần phải hút để lấy ra nếu người bệnh giảm khả năng ho. Sử dụng thuốc cho phụ nữ có thai và cho con bú: - Phụ nữ có thai: Thuốc dùng được cho phụ nữ có thai. - Phụ nữ cho con bú: Thuốc dùng được cho phụ nữ đang cho con bú. Ảnh hưởng của thuốc lên khả năng lái xe, vận hành máy móc - Thuốc không ảnh hưởng đến khả năng lái xe và vận hành máy móc. Tương tác thuốc (Những lưu ý khi dùng chung thuốc với thực phẩm hoặc thuốc khác) - Acetylcystein là một chất khử nên không phù hợp với các chất oxy - hóa. - Không được dùng đồng thời các thuốc ho khác hoặc bất cứ thuốc nào làm giảm bài tiết phế quản trong thời gian điều trị bằng acetylcystein. Bảo quản: Nhiệt độ dưới 30°C, tránh ẩm và ánh sáng Đóng gói: Hộp 10 vỉ x 10 viên Thương hiệu: Imexpharm Nơi sản xuất: Việt Nam Mọi thông tin trên đây chỉ mang tính chất tham khảo. Việc sử dụng thuốc phải tuân theo hướng dẫn của bác sĩ, dược sĩ. Vui lòng đọc kĩ thông tin chi tiết ở tờ rơi bên trong hộp sản phẩm."


        },
        {
            id: 4,
            imgSrc: "https://data-service.pharmacity.io/pmc-upload-media/production/pmc-ecm-core/__sized__/products/P26350_1-thumbnail-510x510-70.jpg",
            alt: "post",
            category:"Thực phẩm dinh dưỡng",
            name: "Acetylcystein 200 Imexpharm (10 vỉ x 10 viên)",
            price: 806000, 
            info:  "Ensure Gold Ít Ngọt là công thức dinh dưỡng đầy đủ và cân đối. Với hơn 30 nghiên cứu khoa học trong suốt 50 năm có mặt, Ensure được chứng minh lâm sàng giúp phục hồi và tăng cường sức khỏe, tăng cường miễn dịch và chất lượng cuộc sống. Ensure Gold mới với hệ dưỡng chất StrengthPro gồm HMB, YBG và nhiều dưỡng chất khác.",
            decription: "Thành phần. Tinh bột bắp thuỷ phân, DẦU THỰC VẬT (dầu hướng dương giàu oleic, dầu đậu nành, dầu hạt cải), sucrose, natri caseinat, đạm đậu nành tinh chế, oligofructose, đạm whey cô đặc, KHOÁNG CHẤT (kali citrat, tricanxi phosphat, magiê sulfat, magiê clorid, kali clorid, natri citrat, dikali hydrophosphat, natri clorid, canxi carbonat, kali hydroxid, sắt sulfat, kẽm sulfat, mangan sulfat, đồng sulfat, crôm clorid, kali iodid, natri molybdat, natri selenat), canxi β-hydroxy-β-methylbutyrat monohydrat (CaHMB), hương vani tổng hợp, Beta Glucan từ nấm men (YBG), VITAMIN (acid ascorbic, ascorbyl palmitat, Vitamin E, hỗn hợp tocopherol, canxi pantothenat, niacinamid, pyridoxin hydroclorid, riboflavin, thiamin hydroclorid, Vitamin A palmitat, vitamin D3, acid folic, beta caroten, phylloquinon, biotin, cyanocobalamin), cholin clorid, taurin, l-carnitin.",
            subImg: "https://data-service.pharmacity.io/pmc-upload-media/production/pmc-ecm-core/products/P12581_2_l.webp"
            
            // addDecription: "Chống chỉ định (Khi nào không nên dùng thuốc này?) Thuốc Acetylcystein 200 mg chống chỉ định trong các trường hợp sau - Quá mẫn với acetylcystein hay bất kỳ thành phần nào của thuốc. - Người có tiền sử hen (nguy cơ phản ứng co thắt phế quản với tất cả các dạng thuốc chứa acetylcystein). - Trẻ em dưới 2 tuổi. Liều dùng và cách dùng - Dạng bào chế của viên nang cứng Acetylcystein 200mg không thích hợp sử dụng cho trẻ em từ 2 đến 6 tuổi. - Người lớn và trẻ em trên 6 tuổi: 1 viên/lần x 3 lần/ngày. Lưu ý: Liều dùng trên chỉ mang tính chất tham khảo. Liều dùng cụ thể tùy thuộc vào thể trạng và mức độ diễn tiến của bệnh. Để có liều dùng phù hợp, bạn cần tham khảo ý kiến bác sĩ hoặc chuyên viên y tế. Tác dụng phụ Khi sử dụng thuốc Acetylcystein 200 mg bạn có thể gặp các tác dụng không mong muốn (ADR). Thường gặp, ADR > 1/100 - Buồn nôn, nôn. Ít gặp, 1/1000 < ADR < 1/100 - Buồn ngủ, nhức đầu, ù tai, viêm miệng, chảy nước mũi nhiều, phát ban, mày đay. Hiếm gặp, ADR < 1/1000 - Co thắt phế quản kèm phản ứng dạng phản vệ toàn thân, sốt, rét run. Hướng dẫn cách xử trí ADR - Khi gặp tác dụng phụ của thuốc, cần ngưng sử dụng và thông báo cho bác sĩ hoặc đến cơ sở y tế gần nhất để được xử trí kịp thời. Thận trọng (Những lưu ý khi dùng thuốc) - Cần giám sát chặt chẽ người có tiền sử dị ứng vì có nguy cơ phát hen. - Nếu có co thắt phế quản, phải dùng thuốc phun mù giãn phế quản như salbutamol (thuốc beta-2 adrenergic chọn lọc, tác dụng ngắn) hoặc ipratropium (thuốc kháng muscarin) và phải ngừng sử dụng acetylcystein. - Khi điều trị với acetylcystein, có thể xuất hiện nhiều đờm loãng ở phế quản, cần phải hút để lấy ra nếu người bệnh giảm khả năng ho. Sử dụng thuốc cho phụ nữ có thai và cho con bú: - Phụ nữ có thai: Thuốc dùng được cho phụ nữ có thai. - Phụ nữ cho con bú: Thuốc dùng được cho phụ nữ đang cho con bú. Ảnh hưởng của thuốc lên khả năng lái xe, vận hành máy móc - Thuốc không ảnh hưởng đến khả năng lái xe và vận hành máy móc. Tương tác thuốc (Những lưu ý khi dùng chung thuốc với thực phẩm hoặc thuốc khác) - Acetylcystein là một chất khử nên không phù hợp với các chất oxy - hóa. - Không được dùng đồng thời các thuốc ho khác hoặc bất cứ thuốc nào làm giảm bài tiết phế quản trong thời gian điều trị bằng acetylcystein. Bảo quản: Nhiệt độ dưới 30°C, tránh ẩm và ánh sáng Đóng gói: Hộp 10 vỉ x 10 viên Thương hiệu: Imexpharm Nơi sản xuất: Việt Nam Mọi thông tin trên đây chỉ mang tính chất tham khảo. Việc sử dụng thuốc phải tuân theo hướng dẫn của bác sĩ, dược sĩ. Vui lòng đọc kĩ thông tin chi tiết ở tờ rơi bên trong hộp sản phẩm."
        },
        {
            id: 5,
            imgSrc: "https://data-service.pharmacity.io/pmc-upload-media/production/pmc-ecm-core/__sized__/products/P08401_11-thumbnail-510x510-70.jpg",
            alt: "post",
            category:"Thực phẩm dinh dưỡng",
            name: "Acetylcystein 200 Imexpharm (10 vỉ x 10 viên)",
            price: 147004, 
            info:  "Hoạt chất: Acetylcysteine. Công dụng: Điều trị các bệnh lý đường hô hấp có đờm nhầy quánh như viêm phế quản cấp và mạn. Đối tượng sử dụng: Người lớn/ trẻ em trên 2 tuổi. Hình thức: Viên nang cứng. Thương hiệu: Imexpharm. Nơi sản xuất: Việt Nam. *Thuốc chỉ dùng theo đơn của bác sĩ",
            decription: "Thành phần. Acetylcysteine 200mg. Tá dược: Đường trắng, Mannitol, Dinatri hydrophosphat khan, Bột mùi dâu, Aspartam, Colloidal anhydrous silica. Chỉ định (Thuốc dùng cho bệnh gì?). Thuốc Acetylcystein 200 mg được chỉ định dùng trong các trường hợp sau:. - Điều trị các bệnh lý đường hô hấp có đờm nhầy quánh như viêm phế quản cấp và mạn. - Dùng làm thuốc tiêu chất nhầy trong bệnh nhầy nhớt (mucoviscidosis) như xơ nang tuyến tụy.",
            subImg: "https://data-service.pharmacity.io/pmc-upload-media/production/pmc-ecm-core/products/P12581_2_l.webp"
            // addDecription: "Chống chỉ định (Khi nào không nên dùng thuốc này?) Thuốc Acetylcystein 200 mg chống chỉ định trong các trường hợp sau - Quá mẫn với acetylcystein hay bất kỳ thành phần nào của thuốc. - Người có tiền sử hen (nguy cơ phản ứng co thắt phế quản với tất cả các dạng thuốc chứa acetylcystein). - Trẻ em dưới 2 tuổi. Liều dùng và cách dùng - Dạng bào chế của viên nang cứng Acetylcystein 200mg không thích hợp sử dụng cho trẻ em từ 2 đến 6 tuổi. - Người lớn và trẻ em trên 6 tuổi: 1 viên/lần x 3 lần/ngày. Lưu ý: Liều dùng trên chỉ mang tính chất tham khảo. Liều dùng cụ thể tùy thuộc vào thể trạng và mức độ diễn tiến của bệnh. Để có liều dùng phù hợp, bạn cần tham khảo ý kiến bác sĩ hoặc chuyên viên y tế. Tác dụng phụ Khi sử dụng thuốc Acetylcystein 200 mg bạn có thể gặp các tác dụng không mong muốn (ADR). Thường gặp, ADR > 1/100 - Buồn nôn, nôn. Ít gặp, 1/1000 < ADR < 1/100 - Buồn ngủ, nhức đầu, ù tai, viêm miệng, chảy nước mũi nhiều, phát ban, mày đay. Hiếm gặp, ADR < 1/1000 - Co thắt phế quản kèm phản ứng dạng phản vệ toàn thân, sốt, rét run. Hướng dẫn cách xử trí ADR - Khi gặp tác dụng phụ của thuốc, cần ngưng sử dụng và thông báo cho bác sĩ hoặc đến cơ sở y tế gần nhất để được xử trí kịp thời. Thận trọng (Những lưu ý khi dùng thuốc) - Cần giám sát chặt chẽ người có tiền sử dị ứng vì có nguy cơ phát hen. - Nếu có co thắt phế quản, phải dùng thuốc phun mù giãn phế quản như salbutamol (thuốc beta-2 adrenergic chọn lọc, tác dụng ngắn) hoặc ipratropium (thuốc kháng muscarin) và phải ngừng sử dụng acetylcystein. - Khi điều trị với acetylcystein, có thể xuất hiện nhiều đờm loãng ở phế quản, cần phải hút để lấy ra nếu người bệnh giảm khả năng ho. Sử dụng thuốc cho phụ nữ có thai và cho con bú: - Phụ nữ có thai: Thuốc dùng được cho phụ nữ có thai. - Phụ nữ cho con bú: Thuốc dùng được cho phụ nữ đang cho con bú. Ảnh hưởng của thuốc lên khả năng lái xe, vận hành máy móc - Thuốc không ảnh hưởng đến khả năng lái xe và vận hành máy móc. Tương tác thuốc (Những lưu ý khi dùng chung thuốc với thực phẩm hoặc thuốc khác) - Acetylcystein là một chất khử nên không phù hợp với các chất oxy - hóa. - Không được dùng đồng thời các thuốc ho khác hoặc bất cứ thuốc nào làm giảm bài tiết phế quản trong thời gian điều trị bằng acetylcystein. Bảo quản: Nhiệt độ dưới 30°C, tránh ẩm và ánh sáng Đóng gói: Hộp 10 vỉ x 10 viên Thương hiệu: Imexpharm Nơi sản xuất: Việt Nam Mọi thông tin trên đây chỉ mang tính chất tham khảo. Việc sử dụng thuốc phải tuân theo hướng dẫn của bác sĩ, dược sĩ. Vui lòng đọc kĩ thông tin chi tiết ở tờ rơi bên trong hộp sản phẩm."

        },
        {
            id: 6,
            imgSrc: "https://data-service.pharmacity.io/pmc-upload-media/production/pmc-ecm-core/__sized__/products/P25117_1-thumbnail-510x510-70.jpg",
            alt: "post",
            category:"Thực phẩm dinh dưỡng",
            name: "Acetylcystein 200 Imexpharm (10 vỉ x 10 viên)",
            price: 147012, 
            info:  "Hoạt chất: Acetylcysteine. Công dụng: Điều trị các bệnh lý đường hô hấp có đờm nhầy quánh như viêm phế quản cấp và mạn. Đối tượng sử dụng: Người lớn/ trẻ em trên 2 tuổi. Hình thức: Viên nang cứng. Thương hiệu: Imexpharm. Nơi sản xuất: Việt Nam. *Thuốc chỉ dùng theo đơn của bác sĩ",
            decription: "Thành phần. Acetylcysteine 200mg. Tá dược: Đường trắng, Mannitol, Dinatri hydrophosphat khan, Bột mùi dâu, Aspartam, Colloidal anhydrous silica. Chỉ định (Thuốc dùng cho bệnh gì?). Thuốc Acetylcystein 200 mg được chỉ định dùng trong các trường hợp sau:. - Điều trị các bệnh lý đường hô hấp có đờm nhầy quánh như viêm phế quản cấp và mạn. - Dùng làm thuốc tiêu chất nhầy trong bệnh nhầy nhớt (mucoviscidosis) như xơ nang tuyến tụy.",
            subImg: "https://data-service.pharmacity.io/pmc-upload-media/production/pmc-ecm-core/products/P12581_2_l.webp"
            // addDecription: "Chống chỉ định (Khi nào không nên dùng thuốc này?) Thuốc Acetylcystein 200 mg chống chỉ định trong các trường hợp sau - Quá mẫn với acetylcystein hay bất kỳ thành phần nào của thuốc. - Người có tiền sử hen (nguy cơ phản ứng co thắt phế quản với tất cả các dạng thuốc chứa acetylcystein). - Trẻ em dưới 2 tuổi. Liều dùng và cách dùng - Dạng bào chế của viên nang cứng Acetylcystein 200mg không thích hợp sử dụng cho trẻ em từ 2 đến 6 tuổi. - Người lớn và trẻ em trên 6 tuổi: 1 viên/lần x 3 lần/ngày. Lưu ý: Liều dùng trên chỉ mang tính chất tham khảo. Liều dùng cụ thể tùy thuộc vào thể trạng và mức độ diễn tiến của bệnh. Để có liều dùng phù hợp, bạn cần tham khảo ý kiến bác sĩ hoặc chuyên viên y tế. Tác dụng phụ Khi sử dụng thuốc Acetylcystein 200 mg bạn có thể gặp các tác dụng không mong muốn (ADR). Thường gặp, ADR > 1/100 - Buồn nôn, nôn. Ít gặp, 1/1000 < ADR < 1/100 - Buồn ngủ, nhức đầu, ù tai, viêm miệng, chảy nước mũi nhiều, phát ban, mày đay. Hiếm gặp, ADR < 1/1000 - Co thắt phế quản kèm phản ứng dạng phản vệ toàn thân, sốt, rét run. Hướng dẫn cách xử trí ADR - Khi gặp tác dụng phụ của thuốc, cần ngưng sử dụng và thông báo cho bác sĩ hoặc đến cơ sở y tế gần nhất để được xử trí kịp thời. Thận trọng (Những lưu ý khi dùng thuốc) - Cần giám sát chặt chẽ người có tiền sử dị ứng vì có nguy cơ phát hen. - Nếu có co thắt phế quản, phải dùng thuốc phun mù giãn phế quản như salbutamol (thuốc beta-2 adrenergic chọn lọc, tác dụng ngắn) hoặc ipratropium (thuốc kháng muscarin) và phải ngừng sử dụng acetylcystein. - Khi điều trị với acetylcystein, có thể xuất hiện nhiều đờm loãng ở phế quản, cần phải hút để lấy ra nếu người bệnh giảm khả năng ho. Sử dụng thuốc cho phụ nữ có thai và cho con bú: - Phụ nữ có thai: Thuốc dùng được cho phụ nữ có thai. - Phụ nữ cho con bú: Thuốc dùng được cho phụ nữ đang cho con bú. Ảnh hưởng của thuốc lên khả năng lái xe, vận hành máy móc - Thuốc không ảnh hưởng đến khả năng lái xe và vận hành máy móc. Tương tác thuốc (Những lưu ý khi dùng chung thuốc với thực phẩm hoặc thuốc khác) - Acetylcystein là một chất khử nên không phù hợp với các chất oxy - hóa. - Không được dùng đồng thời các thuốc ho khác hoặc bất cứ thuốc nào làm giảm bài tiết phế quản trong thời gian điều trị bằng acetylcystein. Bảo quản: Nhiệt độ dưới 30°C, tránh ẩm và ánh sáng Đóng gói: Hộp 10 vỉ x 10 viên Thương hiệu: Imexpharm Nơi sản xuất: Việt Nam Mọi thông tin trên đây chỉ mang tính chất tham khảo. Việc sử dụng thuốc phải tuân theo hướng dẫn của bác sĩ, dược sĩ. Vui lòng đọc kĩ thông tin chi tiết ở tờ rơi bên trong hộp sản phẩm."
            

        },
        {
            id: 7,
            imgSrc: "https://data-service.pharmacity.io/pmc-upload-media/production/pmc-ecm-core/__sized__/products/P22985_1-thumbnail-510x510-70.jpg",
            alt: "post",
            category:"Dụng cụ sơ cứu",
            name: "Acetylcystein 200 Imexpharm (10 vỉ x 10 viên)",
            price: 147045, 
            info:  "Hoạt chất: Acetylcysteine. Công dụng: Điều trị các bệnh lý đường hô hấp có đờm nhầy quánh như viêm phế quản cấp và mạn. Đối tượng sử dụng: Người lớn/ trẻ em trên 2 tuổi. Hình thức: Viên nang cứng. Thương hiệu: Imexpharm. Nơi sản xuất: Việt Nam. *Thuốc chỉ dùng theo đơn của bác sĩ",
            decription: "Thành phần. Acetylcysteine 200mg. Tá dược: Đường trắng, Mannitol, Dinatri hydrophosphat khan, Bột mùi dâu, Aspartam, Colloidal anhydrous silica. Chỉ định (Thuốc dùng cho bệnh gì?). Thuốc Acetylcystein 200 mg được chỉ định dùng trong các trường hợp sau:. - Điều trị các bệnh lý đường hô hấp có đờm nhầy quánh như viêm phế quản cấp và mạn. - Dùng làm thuốc tiêu chất nhầy trong bệnh nhầy nhớt (mucoviscidosis) như xơ nang tuyến tụy.",
            subImg: "https://data-service.pharmacity.io/pmc-upload-media/production/pmc-ecm-core/products/P12581_2_l.webp"
            // addDecription: "Chống chỉ định (Khi nào không nên dùng thuốc này?) Thuốc Acetylcystein 200 mg chống chỉ định trong các trường hợp sau - Quá mẫn với acetylcystein hay bất kỳ thành phần nào của thuốc. - Người có tiền sử hen (nguy cơ phản ứng co thắt phế quản với tất cả các dạng thuốc chứa acetylcystein). - Trẻ em dưới 2 tuổi. Liều dùng và cách dùng - Dạng bào chế của viên nang cứng Acetylcystein 200mg không thích hợp sử dụng cho trẻ em từ 2 đến 6 tuổi. - Người lớn và trẻ em trên 6 tuổi: 1 viên/lần x 3 lần/ngày. Lưu ý: Liều dùng trên chỉ mang tính chất tham khảo. Liều dùng cụ thể tùy thuộc vào thể trạng và mức độ diễn tiến của bệnh. Để có liều dùng phù hợp, bạn cần tham khảo ý kiến bác sĩ hoặc chuyên viên y tế. Tác dụng phụ Khi sử dụng thuốc Acetylcystein 200 mg bạn có thể gặp các tác dụng không mong muốn (ADR). Thường gặp, ADR > 1/100 - Buồn nôn, nôn. Ít gặp, 1/1000 < ADR < 1/100 - Buồn ngủ, nhức đầu, ù tai, viêm miệng, chảy nước mũi nhiều, phát ban, mày đay. Hiếm gặp, ADR < 1/1000 - Co thắt phế quản kèm phản ứng dạng phản vệ toàn thân, sốt, rét run. Hướng dẫn cách xử trí ADR - Khi gặp tác dụng phụ của thuốc, cần ngưng sử dụng và thông báo cho bác sĩ hoặc đến cơ sở y tế gần nhất để được xử trí kịp thời. Thận trọng (Những lưu ý khi dùng thuốc) - Cần giám sát chặt chẽ người có tiền sử dị ứng vì có nguy cơ phát hen. - Nếu có co thắt phế quản, phải dùng thuốc phun mù giãn phế quản như salbutamol (thuốc beta-2 adrenergic chọn lọc, tác dụng ngắn) hoặc ipratropium (thuốc kháng muscarin) và phải ngừng sử dụng acetylcystein. - Khi điều trị với acetylcystein, có thể xuất hiện nhiều đờm loãng ở phế quản, cần phải hút để lấy ra nếu người bệnh giảm khả năng ho. Sử dụng thuốc cho phụ nữ có thai và cho con bú: - Phụ nữ có thai: Thuốc dùng được cho phụ nữ có thai. - Phụ nữ cho con bú: Thuốc dùng được cho phụ nữ đang cho con bú. Ảnh hưởng của thuốc lên khả năng lái xe, vận hành máy móc - Thuốc không ảnh hưởng đến khả năng lái xe và vận hành máy móc. Tương tác thuốc (Những lưu ý khi dùng chung thuốc với thực phẩm hoặc thuốc khác) - Acetylcystein là một chất khử nên không phù hợp với các chất oxy - hóa. - Không được dùng đồng thời các thuốc ho khác hoặc bất cứ thuốc nào làm giảm bài tiết phế quản trong thời gian điều trị bằng acetylcystein. Bảo quản: Nhiệt độ dưới 30°C, tránh ẩm và ánh sáng Đóng gói: Hộp 10 vỉ x 10 viên Thương hiệu: Imexpharm Nơi sản xuất: Việt Nam Mọi thông tin trên đây chỉ mang tính chất tham khảo. Việc sử dụng thuốc phải tuân theo hướng dẫn của bác sĩ, dược sĩ. Vui lòng đọc kĩ thông tin chi tiết ở tờ rơi bên trong hộp sản phẩm."


        },
        {
            id: 8,
            imgSrc: "https://data-service.pharmacity.io/pmc-upload-media/production/pmc-ecm-core/__sized__/products/P21744_1-thumbnail-510x510-70.jpg",
            alt: "post",
            category:"Khẩu trang y tế",
            name: "Acetylcystein 200 Imexpharm (10 vỉ x 10 viên)",
            price: 147076, 
            info:  "Hoạt chất: Acetylcysteine. Công dụng: Điều trị các bệnh lý đường hô hấp có đờm nhầy quánh như viêm phế quản cấp và mạn. Đối tượng sử dụng: Người lớn/ trẻ em trên 2 tuổi. Hình thức: Viên nang cứng. Thương hiệu: Imexpharm. Nơi sản xuất: Việt Nam. *Thuốc chỉ dùng theo đơn của bác sĩ",
            decription: "Thành phần. Acetylcysteine 200mg. Tá dược: Đường trắng, Mannitol, Dinatri hydrophosphat khan, Bột mùi dâu, Aspartam, Colloidal anhydrous silica. Chỉ định (Thuốc dùng cho bệnh gì?). Thuốc Acetylcystein 200 mg được chỉ định dùng trong các trường hợp sau:. - Điều trị các bệnh lý đường hô hấp có đờm nhầy quánh như viêm phế quản cấp và mạn. - Dùng làm thuốc tiêu chất nhầy trong bệnh nhầy nhớt (mucoviscidosis) như xơ nang tuyến tụy.",
            subImg: "https://data-service.pharmacity.io/pmc-upload-media/production/pmc-ecm-core/products/P12581_2_l.webp"
            // addDecription: "Chống chỉ định (Khi nào không nên dùng thuốc này?) Thuốc Acetylcystein 200 mg chống chỉ định trong các trường hợp sau - Quá mẫn với acetylcystein hay bất kỳ thành phần nào của thuốc. - Người có tiền sử hen (nguy cơ phản ứng co thắt phế quản với tất cả các dạng thuốc chứa acetylcystein). - Trẻ em dưới 2 tuổi. Liều dùng và cách dùng - Dạng bào chế của viên nang cứng Acetylcystein 200mg không thích hợp sử dụng cho trẻ em từ 2 đến 6 tuổi. - Người lớn và trẻ em trên 6 tuổi: 1 viên/lần x 3 lần/ngày. Lưu ý: Liều dùng trên chỉ mang tính chất tham khảo. Liều dùng cụ thể tùy thuộc vào thể trạng và mức độ diễn tiến của bệnh. Để có liều dùng phù hợp, bạn cần tham khảo ý kiến bác sĩ hoặc chuyên viên y tế. Tác dụng phụ Khi sử dụng thuốc Acetylcystein 200 mg bạn có thể gặp các tác dụng không mong muốn (ADR). Thường gặp, ADR > 1/100 - Buồn nôn, nôn. Ít gặp, 1/1000 < ADR < 1/100 - Buồn ngủ, nhức đầu, ù tai, viêm miệng, chảy nước mũi nhiều, phát ban, mày đay. Hiếm gặp, ADR < 1/1000 - Co thắt phế quản kèm phản ứng dạng phản vệ toàn thân, sốt, rét run. Hướng dẫn cách xử trí ADR - Khi gặp tác dụng phụ của thuốc, cần ngưng sử dụng và thông báo cho bác sĩ hoặc đến cơ sở y tế gần nhất để được xử trí kịp thời. Thận trọng (Những lưu ý khi dùng thuốc) - Cần giám sát chặt chẽ người có tiền sử dị ứng vì có nguy cơ phát hen. - Nếu có co thắt phế quản, phải dùng thuốc phun mù giãn phế quản như salbutamol (thuốc beta-2 adrenergic chọn lọc, tác dụng ngắn) hoặc ipratropium (thuốc kháng muscarin) và phải ngừng sử dụng acetylcystein. - Khi điều trị với acetylcystein, có thể xuất hiện nhiều đờm loãng ở phế quản, cần phải hút để lấy ra nếu người bệnh giảm khả năng ho. Sử dụng thuốc cho phụ nữ có thai và cho con bú: - Phụ nữ có thai: Thuốc dùng được cho phụ nữ có thai. - Phụ nữ cho con bú: Thuốc dùng được cho phụ nữ đang cho con bú. Ảnh hưởng của thuốc lên khả năng lái xe, vận hành máy móc - Thuốc không ảnh hưởng đến khả năng lái xe và vận hành máy móc. Tương tác thuốc (Những lưu ý khi dùng chung thuốc với thực phẩm hoặc thuốc khác) - Acetylcystein là một chất khử nên không phù hợp với các chất oxy - hóa. - Không được dùng đồng thời các thuốc ho khác hoặc bất cứ thuốc nào làm giảm bài tiết phế quản trong thời gian điều trị bằng acetylcystein. Bảo quản: Nhiệt độ dưới 30°C, tránh ẩm và ánh sáng Đóng gói: Hộp 10 vỉ x 10 viên Thương hiệu: Imexpharm Nơi sản xuất: Việt Nam Mọi thông tin trên đây chỉ mang tính chất tham khảo. Việc sử dụng thuốc phải tuân theo hướng dẫn của bác sĩ, dược sĩ. Vui lòng đọc kĩ thông tin chi tiết ở tờ rơi bên trong hộp sản phẩm."

        },
        {
            id: 9,
            imgSrc: "https://data-service.pharmacity.io/pmc-upload-media/production/pmc-ecm-core/__sized__/products/P08241_3-thumbnail-510x510-70.jpg",
            alt: "post",
            category:"Khẩu trang y tế",
            name: "Acetylcystein 200 Imexpharm (10 vỉ x 10 viên)",
            price: 147021, 
            info:  "Hoạt chất: Acetylcysteine. Công dụng: Điều trị các bệnh lý đường hô hấp có đờm nhầy quánh như viêm phế quản cấp và mạn. Đối tượng sử dụng: Người lớn/ trẻ em trên 2 tuổi. Hình thức: Viên nang cứng. Thương hiệu: Imexpharm. Nơi sản xuất: Việt Nam. *Thuốc chỉ dùng theo đơn của bác sĩ",
            decription: "Thành phần. Acetylcysteine 200mg. Tá dược: Đường trắng, Mannitol, Dinatri hydrophosphat khan, Bột mùi dâu, Aspartam, Colloidal anhydrous silica. Chỉ định (Thuốc dùng cho bệnh gì?). Thuốc Acetylcystein 200 mg được chỉ định dùng trong các trường hợp sau:. - Điều trị các bệnh lý đường hô hấp có đờm nhầy quánh như viêm phế quản cấp và mạn. - Dùng làm thuốc tiêu chất nhầy trong bệnh nhầy nhớt (mucoviscidosis) như xơ nang tuyến tụy.",
            subImg: "https://data-service.pharmacity.io/pmc-upload-media/production/pmc-ecm-core/products/P12581_2_l.webp"
            // addDecription: "Chống chỉ định (Khi nào không nên dùng thuốc này?) Thuốc Acetylcystein 200 mg chống chỉ định trong các trường hợp sau - Quá mẫn với acetylcystein hay bất kỳ thành phần nào của thuốc. - Người có tiền sử hen (nguy cơ phản ứng co thắt phế quản với tất cả các dạng thuốc chứa acetylcystein). - Trẻ em dưới 2 tuổi. Liều dùng và cách dùng - Dạng bào chế của viên nang cứng Acetylcystein 200mg không thích hợp sử dụng cho trẻ em từ 2 đến 6 tuổi. - Người lớn và trẻ em trên 6 tuổi: 1 viên/lần x 3 lần/ngày. Lưu ý: Liều dùng trên chỉ mang tính chất tham khảo. Liều dùng cụ thể tùy thuộc vào thể trạng và mức độ diễn tiến của bệnh. Để có liều dùng phù hợp, bạn cần tham khảo ý kiến bác sĩ hoặc chuyên viên y tế. Tác dụng phụ Khi sử dụng thuốc Acetylcystein 200 mg bạn có thể gặp các tác dụng không mong muốn (ADR). Thường gặp, ADR > 1/100 - Buồn nôn, nôn. Ít gặp, 1/1000 < ADR < 1/100 - Buồn ngủ, nhức đầu, ù tai, viêm miệng, chảy nước mũi nhiều, phát ban, mày đay. Hiếm gặp, ADR < 1/1000 - Co thắt phế quản kèm phản ứng dạng phản vệ toàn thân, sốt, rét run. Hướng dẫn cách xử trí ADR - Khi gặp tác dụng phụ của thuốc, cần ngưng sử dụng và thông báo cho bác sĩ hoặc đến cơ sở y tế gần nhất để được xử trí kịp thời. Thận trọng (Những lưu ý khi dùng thuốc) - Cần giám sát chặt chẽ người có tiền sử dị ứng vì có nguy cơ phát hen. - Nếu có co thắt phế quản, phải dùng thuốc phun mù giãn phế quản như salbutamol (thuốc beta-2 adrenergic chọn lọc, tác dụng ngắn) hoặc ipratropium (thuốc kháng muscarin) và phải ngừng sử dụng acetylcystein. - Khi điều trị với acetylcystein, có thể xuất hiện nhiều đờm loãng ở phế quản, cần phải hút để lấy ra nếu người bệnh giảm khả năng ho. Sử dụng thuốc cho phụ nữ có thai và cho con bú: - Phụ nữ có thai: Thuốc dùng được cho phụ nữ có thai. - Phụ nữ cho con bú: Thuốc dùng được cho phụ nữ đang cho con bú. Ảnh hưởng của thuốc lên khả năng lái xe, vận hành máy móc - Thuốc không ảnh hưởng đến khả năng lái xe và vận hành máy móc. Tương tác thuốc (Những lưu ý khi dùng chung thuốc với thực phẩm hoặc thuốc khác) - Acetylcystein là một chất khử nên không phù hợp với các chất oxy - hóa. - Không được dùng đồng thời các thuốc ho khác hoặc bất cứ thuốc nào làm giảm bài tiết phế quản trong thời gian điều trị bằng acetylcystein. Bảo quản: Nhiệt độ dưới 30°C, tránh ẩm và ánh sáng Đóng gói: Hộp 10 vỉ x 10 viên Thương hiệu: Imexpharm Nơi sản xuất: Việt Nam Mọi thông tin trên đây chỉ mang tính chất tham khảo. Việc sử dụng thuốc phải tuân theo hướng dẫn của bác sĩ, dược sĩ. Vui lòng đọc kĩ thông tin chi tiết ở tờ rơi bên trong hộp sản phẩm."

        },
        {
            id: 10,
            imgSrc: "https://data-service.pharmacity.io/pmc-upload-media/production/pmc-ecm-core/__sized__/products/P22015_1N-thumbnail-510x510-70.jpg",
            alt: "post",
            category:"Khẩu trang y tế",
            name: "Acetylcystein 200 Imexpharm (10 vỉ x 10 viên)",
            price: 147011, 
            info:  "Hoạt chất: Acetylcysteine. Công dụng: Điều trị các bệnh lý đường hô hấp có đờm nhầy quánh như viêm phế quản cấp và mạn. Đối tượng sử dụng: Người lớn/ trẻ em trên 2 tuổi. Hình thức: Viên nang cứng. Thương hiệu: Imexpharm. Nơi sản xuất: Việt Nam. *Thuốc chỉ dùng theo đơn của bác sĩ",
            decription: "Thành phần. Acetylcysteine 200mg. Tá dược: Đường trắng, Mannitol, Dinatri hydrophosphat khan, Bột mùi dâu, Aspartam, Colloidal anhydrous silica. Chỉ định (Thuốc dùng cho bệnh gì?). Thuốc Acetylcystein 200 mg được chỉ định dùng trong các trường hợp sau:. - Điều trị các bệnh lý đường hô hấp có đờm nhầy quánh như viêm phế quản cấp và mạn. - Dùng làm thuốc tiêu chất nhầy trong bệnh nhầy nhớt (mucoviscidosis) như xơ nang tuyến tụy.",
            subImg: "https://data-service.pharmacity.io/pmc-upload-media/production/pmc-ecm-core/products/P12581_2_l.webp"
            // addDecription: "Chống chỉ định (Khi nào không nên dùng thuốc này?) Thuốc Acetylcystein 200 mg chống chỉ định trong các trường hợp sau - Quá mẫn với acetylcystein hay bất kỳ thành phần nào của thuốc. - Người có tiền sử hen (nguy cơ phản ứng co thắt phế quản với tất cả các dạng thuốc chứa acetylcystein). - Trẻ em dưới 2 tuổi. Liều dùng và cách dùng - Dạng bào chế của viên nang cứng Acetylcystein 200mg không thích hợp sử dụng cho trẻ em từ 2 đến 6 tuổi. - Người lớn và trẻ em trên 6 tuổi: 1 viên/lần x 3 lần/ngày. Lưu ý: Liều dùng trên chỉ mang tính chất tham khảo. Liều dùng cụ thể tùy thuộc vào thể trạng và mức độ diễn tiến của bệnh. Để có liều dùng phù hợp, bạn cần tham khảo ý kiến bác sĩ hoặc chuyên viên y tế. Tác dụng phụ Khi sử dụng thuốc Acetylcystein 200 mg bạn có thể gặp các tác dụng không mong muốn (ADR). Thường gặp, ADR > 1/100 - Buồn nôn, nôn. Ít gặp, 1/1000 < ADR < 1/100 - Buồn ngủ, nhức đầu, ù tai, viêm miệng, chảy nước mũi nhiều, phát ban, mày đay. Hiếm gặp, ADR < 1/1000 - Co thắt phế quản kèm phản ứng dạng phản vệ toàn thân, sốt, rét run. Hướng dẫn cách xử trí ADR - Khi gặp tác dụng phụ của thuốc, cần ngưng sử dụng và thông báo cho bác sĩ hoặc đến cơ sở y tế gần nhất để được xử trí kịp thời. Thận trọng (Những lưu ý khi dùng thuốc) - Cần giám sát chặt chẽ người có tiền sử dị ứng vì có nguy cơ phát hen. - Nếu có co thắt phế quản, phải dùng thuốc phun mù giãn phế quản như salbutamol (thuốc beta-2 adrenergic chọn lọc, tác dụng ngắn) hoặc ipratropium (thuốc kháng muscarin) và phải ngừng sử dụng acetylcystein. - Khi điều trị với acetylcystein, có thể xuất hiện nhiều đờm loãng ở phế quản, cần phải hút để lấy ra nếu người bệnh giảm khả năng ho. Sử dụng thuốc cho phụ nữ có thai và cho con bú: - Phụ nữ có thai: Thuốc dùng được cho phụ nữ có thai. - Phụ nữ cho con bú: Thuốc dùng được cho phụ nữ đang cho con bú. Ảnh hưởng của thuốc lên khả năng lái xe, vận hành máy móc - Thuốc không ảnh hưởng đến khả năng lái xe và vận hành máy móc. Tương tác thuốc (Những lưu ý khi dùng chung thuốc với thực phẩm hoặc thuốc khác) - Acetylcystein là một chất khử nên không phù hợp với các chất oxy - hóa. - Không được dùng đồng thời các thuốc ho khác hoặc bất cứ thuốc nào làm giảm bài tiết phế quản trong thời gian điều trị bằng acetylcystein. Bảo quản: Nhiệt độ dưới 30°C, tránh ẩm và ánh sáng Đóng gói: Hộp 10 vỉ x 10 viên Thương hiệu: Imexpharm Nơi sản xuất: Việt Nam Mọi thông tin trên đây chỉ mang tính chất tham khảo. Việc sử dụng thuốc phải tuân theo hướng dẫn của bác sĩ, dược sĩ. Vui lòng đọc kĩ thông tin chi tiết ở tờ rơi bên trong hộp sản phẩm."


        },
        {
            id: 11,
            imgSrc: "https://data-service.pharmacity.io/pmc-upload-media/production/pmc-ecm-core/__sized__/products/P07218_1_l-thumbnail-510x510.webp",
            alt: "post",
            category:"Chống muỗi",
            name: "Acetylcystein 200 Imexpharm (10 vỉ x 10 viên)",
            price: 147032, 
            info:  "Hoạt chất: Acetylcysteine. Công dụng: Điều trị các bệnh lý đường hô hấp có đờm nhầy quánh như viêm phế quản cấp và mạn. Đối tượng sử dụng: Người lớn/ trẻ em trên 2 tuổi. Hình thức: Viên nang cứng. Thương hiệu: Imexpharm. Nơi sản xuất: Việt Nam. *Thuốc chỉ dùng theo đơn của bác sĩ",
            decription: "Thành phần. Acetylcysteine 200mg. Tá dược: Đường trắng, Mannitol, Dinatri hydrophosphat khan, Bột mùi dâu, Aspartam, Colloidal anhydrous silica. Chỉ định (Thuốc dùng cho bệnh gì?). Thuốc Acetylcystein 200 mg được chỉ định dùng trong các trường hợp sau:. - Điều trị các bệnh lý đường hô hấp có đờm nhầy quánh như viêm phế quản cấp và mạn. - Dùng làm thuốc tiêu chất nhầy trong bệnh nhầy nhớt (mucoviscidosis) như xơ nang tuyến tụy.",
            subImg: "https://data-service.pharmacity.io/pmc-upload-media/production/pmc-ecm-core/products/P12581_2_l.webp"
            // addDecription: "Chống chỉ định (Khi nào không nên dùng thuốc này?) Thuốc Acetylcystein 200 mg chống chỉ định trong các trường hợp sau - Quá mẫn với acetylcystein hay bất kỳ thành phần nào của thuốc. - Người có tiền sử hen (nguy cơ phản ứng co thắt phế quản với tất cả các dạng thuốc chứa acetylcystein). - Trẻ em dưới 2 tuổi. Liều dùng và cách dùng - Dạng bào chế của viên nang cứng Acetylcystein 200mg không thích hợp sử dụng cho trẻ em từ 2 đến 6 tuổi. - Người lớn và trẻ em trên 6 tuổi: 1 viên/lần x 3 lần/ngày. Lưu ý: Liều dùng trên chỉ mang tính chất tham khảo. Liều dùng cụ thể tùy thuộc vào thể trạng và mức độ diễn tiến của bệnh. Để có liều dùng phù hợp, bạn cần tham khảo ý kiến bác sĩ hoặc chuyên viên y tế. Tác dụng phụ Khi sử dụng thuốc Acetylcystein 200 mg bạn có thể gặp các tác dụng không mong muốn (ADR). Thường gặp, ADR > 1/100 - Buồn nôn, nôn. Ít gặp, 1/1000 < ADR < 1/100 - Buồn ngủ, nhức đầu, ù tai, viêm miệng, chảy nước mũi nhiều, phát ban, mày đay. Hiếm gặp, ADR < 1/1000 - Co thắt phế quản kèm phản ứng dạng phản vệ toàn thân, sốt, rét run. Hướng dẫn cách xử trí ADR - Khi gặp tác dụng phụ của thuốc, cần ngưng sử dụng và thông báo cho bác sĩ hoặc đến cơ sở y tế gần nhất để được xử trí kịp thời. Thận trọng (Những lưu ý khi dùng thuốc) - Cần giám sát chặt chẽ người có tiền sử dị ứng vì có nguy cơ phát hen. - Nếu có co thắt phế quản, phải dùng thuốc phun mù giãn phế quản như salbutamol (thuốc beta-2 adrenergic chọn lọc, tác dụng ngắn) hoặc ipratropium (thuốc kháng muscarin) và phải ngừng sử dụng acetylcystein. - Khi điều trị với acetylcystein, có thể xuất hiện nhiều đờm loãng ở phế quản, cần phải hút để lấy ra nếu người bệnh giảm khả năng ho. Sử dụng thuốc cho phụ nữ có thai và cho con bú: - Phụ nữ có thai: Thuốc dùng được cho phụ nữ có thai. - Phụ nữ cho con bú: Thuốc dùng được cho phụ nữ đang cho con bú. Ảnh hưởng của thuốc lên khả năng lái xe, vận hành máy móc - Thuốc không ảnh hưởng đến khả năng lái xe và vận hành máy móc. Tương tác thuốc (Những lưu ý khi dùng chung thuốc với thực phẩm hoặc thuốc khác) - Acetylcystein là một chất khử nên không phù hợp với các chất oxy - hóa. - Không được dùng đồng thời các thuốc ho khác hoặc bất cứ thuốc nào làm giảm bài tiết phế quản trong thời gian điều trị bằng acetylcystein. Bảo quản: Nhiệt độ dưới 30°C, tránh ẩm và ánh sáng Đóng gói: Hộp 10 vỉ x 10 viên Thương hiệu: Imexpharm Nơi sản xuất: Việt Nam Mọi thông tin trên đây chỉ mang tính chất tham khảo. Việc sử dụng thuốc phải tuân theo hướng dẫn của bác sĩ, dược sĩ. Vui lòng đọc kĩ thông tin chi tiết ở tờ rơi bên trong hộp sản phẩm."
        },
    ];

    localStorage.setItem('productsData', JSON.stringify(productsData));

    const productContainer = document.getElementById("posts-main-container");
    const menuButtons = document.querySelectorAll('.menu-btn');
    const sortSelect = document.getElementById("sort-items");


    function createProductElement(product) {
        const productDiv = document.createElement("a");
        productDiv.style.textDecoration = 'none';
        productDiv.style.color = '#383838';
        productDiv.href = '/detail.html?id=' + product.id; 
        productDiv.className = "product-container";

        const postImgDiv = document.createElement("div");
        postImgDiv.className = "post-img";

        const img = document.createElement("img");
        img.src = product.imgSrc;
        img.alt = product.alt;
        postImgDiv.appendChild(img);

        const postContentDiv = document.createElement("div");
        postContentDiv.className = "post-content";

        const productName = document.createElement("h3");
        productName.textContent = product.name;

        const productPrice = document.createElement("p");
        productPrice.textContent = product.price.toLocaleString() + ' VNĐ';

        const cartBtn = document.createElement("button");
        cartBtn.type = "button";
        cartBtn.className = "cart-btn";
        cartBtn.textContent = "Thêm vào giỏ hàng";

        cartBtn.addEventListener('click', function (event) {
            event.preventDefault();
        });

            // Adding a click event listener to each product
        postContentDiv.addEventListener("click", function () {
            window.location.href = `/detail.html?id=${product.id}`;
        });


        postContentDiv.appendChild(productName);
        postContentDiv.appendChild(productPrice);

        productDiv.appendChild(postImgDiv);
        productDiv.appendChild(postContentDiv);
        productDiv.appendChild(cartBtn);

        return productDiv;
    }

    // PAGINATION
    const itemsPerPage = 6;
    let currentPage = 1;
    let currentCategory = '';
    let currentValue = 1;

    function displayProductsByCategory(categoryName) {
        currentCategory = categoryName;
        currentPage = 1; 
        displayProductsOnPage(currentPage);
        generatePagination();
    }

    function displayProductsOnPage(pageNumber) {
        const startIndex = (pageNumber - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const productsToDisplay = productsData.filter(product => {
            return currentCategory === '' || product.category === currentCategory;
        }).slice(startIndex, endIndex);
        displayProducts(productsToDisplay);
    }

    function displayProducts(products) {
        productContainer.innerHTML = '';
        products.forEach(product => {
            const productElement = createProductElement(product);
            productContainer.appendChild(productElement);
        });
    }

    
    function generatePagination() {
        const totalItems = productsData.filter(product => {
            return currentCategory === '' || product.category === currentCategory;
        }).length;
        const totalPages = Math.ceil(totalItems / itemsPerPage);
        const paginationContainer = document.getElementById('pagination');
        paginationContainer.innerHTML = '';

        for (let i = 1; i <= totalPages; i++) {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = '#';
            a.textContent = i;

            a.addEventListener('click', function () {
                currentPage = i;
                displayProductsOnPage(currentPage);
                highlightCurrentPage();
                setQueryParameters();
            });

            li.appendChild(a);
            paginationContainer.appendChild(li);
        }

        highlightCurrentPage();
    }

    // Hàm hiển thị active trên trang khi thay đổi trang
    function highlightCurrentPage() {
        const paginationLinks = document.querySelectorAll('.pagination a');
        paginationLinks.forEach(link => {
            link.classList.remove('active');
            if (parseInt(link.textContent) === currentPage) {
                link.classList.add('active');
            }
        });
    }

    // Hàm sự kiện hiển thị mặc định tất cả sản phẩm, và bấm vào Danh Mục để quay về mặc định
    menuButtons.forEach(button => {
        button.addEventListener('click', function () {
            const categoryId = this.id;
            displayProductsByCategory('');
            if (categoryId === 'all' || categoryId === '') {
                displayProductsByCategory('');
            } else {
                displayProductsByCategory(categoryId);
            }
        });
    });
    
    // Hàm sự kiện hiển thị các sản phẩm theo danh mục
    document.querySelectorAll('.list-items').forEach(list => {
        list.addEventListener('click', function (event) {
            if (event.target.tagName === 'LI') {
                const selectedCategory = event.target.innerText.trim();
                displayProductsByCategory(selectedCategory);
            }
        });
    });

    // Hàm sắp xếp thứ tự các sản phẩn theo giá
    function sortProductsByPrice(order) {
        const sortedProducts = [...productsData];
        sortedProducts.sort((a, b) => {
            return order === "Giảm dần" ? b.price - a.price : a.price - b.price;
        });
        displayProducts(sortedProducts);
    }

    // Hàm sự kiện hiển thị sản phẩm khi chọn Giảm dần và Tăng dần
    sortSelect.addEventListener('change', function () {
        const selectedOption = this.value;
        if (selectedOption === "Sắp xếp") {
            displayProducts(productsData);
        } else if (selectedOption === "Giảm dần" || selectedOption === "Tăng dần") {
            sortProductsByPrice(selectedOption);
        }
    });

    if (!currentCategory && currentPage === 1) {
        displayProductsOnPage(currentPage);
        generatePagination();
    }
    displayProductsByCategory('');

});

// CART
document.addEventListener('DOMContentLoaded', function () {
            // Lấy ra các phần tử cần thao tác
            const quantityInputs = document.querySelectorAll('.input-quantity');
            const minusButtons = document.querySelectorAll('.fa-minus');
            const plusButtons = document.querySelectorAll('.fa-plus');
        
            updateTotalQuantity();
            // Thêm sự kiện cho nút trừ
            minusButtons.forEach(function (button, index) {
                button.addEventListener('click', function () {
                    if (parseInt(quantityInputs[index].value) > 0) {
                        quantityInputs[index].value = parseInt(quantityInputs[index].value) - 1;
                        updateTotal(index);
                        updateTotalQuantity();
                    }
                });
            });
        
            // Thêm sự kiện cho nút cộng
            plusButtons.forEach(function (button, index) {
                button.addEventListener('click', function () {
                    quantityInputs[index].value = parseInt(quantityInputs[index].value) + 1;
                    updateTotal(index);
                    updateTotalQuantity();
        
                });
            });
        
            // Thêm sự kiện khi giá trị số lượng thay đổi
            quantityInputs.forEach(function (input, index) {
                input.addEventListener('change', function () {
                    if (parseInt(input.value) < 0) {
                        input.value = 0;
                    }
                    updateTotal(index);
                    updateTotalQuantity();
                });
            });
        
            // Hàm cập nhật tổng giá trị
            function updateTotal(index) {
                const quantity = parseInt(quantityInputs[index].value);
                const pricePerUnit = parseFloat(quantityInputs[index].closest('.cart-item').querySelector('.cart-price').textContent.replace('$', ''));
                const totalPrice = quantity * pricePerUnit;
                quantityInputs[index].closest('.cart-item').querySelector('.cart-price:last-child').textContent = '$' + totalPrice.toFixed(2);
            }
        
            // Hàm cập nhật tổng số lượng sản phẩm
            function updateTotalQuantity() {
                let totalQuantity = 0;
                quantityInputs.forEach(function (input) {
                    totalQuantity += parseInt(input.value);
                });
            document.getElementById('total-quantity').innerHTML = 'Số lượng sản phẩm:' + ' ' + totalQuantity;
            }

});

// DETAIL
document.addEventListener("DOMContentLoaded", function () {
    const storedProductsData = localStorage.getItem('productsData');

    if (storedProductsData) {
        const productsData = JSON.parse(storedProductsData);

        const urlParams = new URLSearchParams(window.location.search);
        const productId = urlParams.get('id');

        const productDetailContainer = document.querySelector('.detail');

        if (productId) {
            const product = productsData.find(item => item.id == productId);
            if (product) {
                const productImg = document.querySelector('.main-img');
                const productSubImg = document.querySelector('.sub-img');
                const productName = document.querySelector('.name-detail');
                const productPrice = document.querySelector('.price-detail');
                const infoDetail = document.querySelector('.info-detail');
                const productDescription = document.getElementById('decription');
                // const productaddDescription = document.getElementById('add-decription');

                if (product.info) {
                    const infoLines = product.info.split('. ');
                    let infoHTML = '';
                    infoLines.forEach(line => {
                        infoHTML += `<p>${line}</p>`;
                    });
                    infoDetail.innerHTML = infoHTML;
                };
                if (product.decription) {
                    const decriptionLines = product.decription.split('. ');

                    let decriptionHTML = '';

                    decriptionLines.forEach(line => {
                        decriptionHTML += `${line} <br>`;
                    });
                    productDescription.innerHTML = decriptionHTML;
                };
                productImg.innerHTML = `<img src="${product.imgSrc}" alt="${product.alt}" class="img-detail">`;
                productSubImg.innerHTML =`
                <div ><img src="${product.imgSrc}" alt="${product.alt}" class="main-sub"></div>
                <div ><img src="${product.subImg}" alt="${product.alt}" class="sub"></div>
                `;
                const subImages = document.querySelectorAll('.sub');
                const mainSubImage = document.querySelector('.main-sub');
                subImages.forEach(subImg => {
                    subImg.addEventListener('click', function () {
                        subImages.forEach(sub => mainSubImage.classList.remove('active'));
                        productImg.innerHTML = `<img src="${subImg.src}" alt="${product.alt}" class="img-detail">`;
                        subImg.classList.add('active');
                    });
                });

                mainSubImage.addEventListener('click', function () {
                    subImages.forEach(sub => sub.classList.remove('active'));
                    productImg.innerHTML = `<img src="${product.imgSrc}" alt="${product.alt}" class="img-detail">`;
                    mainSubImage.classList.add('active');
                });
                productName.textContent = product.name;
                productPrice.textContent = product.price.toLocaleString() + ' Đ';

                const decriptionTab = document.getElementById("decription-tab");
                const infoTab = document.getElementById("info-tab");
                const decriptionDetail = document.getElementById('decription');
                const info = document.getElementById('info');
                const moreDetail = document.getElementById('more-detail');

                decriptionDetail.style.display = 'block';
                info.style.display = 'none';

                decriptionTab.addEventListener('click', function () {
                    info.style.display = 'none';
                    decriptionDetail.style.display = 'block';
                    moreDetail.style.display = 'block';
                });

                infoTab.addEventListener('click', function () {
                    info.style.display = 'block';
                    decriptionDetail.style.display = 'none';
                    moreDetail.style.display = 'none';
                });
                // if (product.addDecription) {
                //     const addLines = product.addDecription.split('. ')

                //     let addHTML = '';

                //     addLines.forEach(line => {
                //         addHTML += `${line} <br>`
                //     });
                //     productaddDescription.innerHTML = addHTML;
                // }
                // moreDetail.addEventListener('click', function () {

                //     if (moreDetail.innerText === 'Xem thêm') {
                //         moreDetail.innerText = 'Ẩn bớt';
                //         productaddDescription.style.display = 'block';
                //     } else {
                //         moreDetail.innerText = 'Xem thêm';
                //         productaddDescription.style.display = 'none';
                //     }
                // });

            }
            function createProductElement(product) {
                const productDiv = document.createElement("a");
                productDiv.style.textDecoration = 'none';
                productDiv.style.color = '#383838';
                productDiv.href = '/detail.html?id=' + product.id; 
                productDiv.className = "product-container";
        
                const postImgDiv = document.createElement("div");
                postImgDiv.className = "post-img";
        
                const img = document.createElement("img");
                img.src = product.imgSrc;
                img.alt = product.alt;
                postImgDiv.appendChild(img);
        
                const postContentDiv = document.createElement("div");
                postContentDiv.className = "post-content";
        
                const productName = document.createElement("h3");
                productName.textContent = product.name;
        
                const productPrice = document.createElement("p");
                productPrice.textContent = product.price.toLocaleString() + ' VNĐ';
        
                const cartBtn = document.createElement("button");
                cartBtn.type = "button";
                cartBtn.className = "cart-btn";
                cartBtn.textContent = "Thêm vào giỏ hàng";
        
                cartBtn.addEventListener('click', function (event) {
                    event.preventDefault();
                });
        
                    // Adding a click event listener to each product
                postContentDiv.addEventListener("click", function () {
                    window.location.href = `/detail.html?id=${product.id}`;
                });
        
                postContentDiv.appendChild(productName);
                postContentDiv.appendChild(productPrice);
                productDiv.appendChild(postImgDiv);
                productDiv.appendChild(postContentDiv);
                productDiv.appendChild(cartBtn);
        
                return productDiv;
            }
                        // Function to display sub products in the sub-products section
            function displaySubProducts(category, productId) {
                const subProducts = productsData.filter(product => product.category === category && product.id !== productId);

                const subProductsContainer = document.querySelector('.sub-products');

                subProductsContainer.innerHTML = '';

                subProducts.forEach(product => {
                    const productElement = createProductElement(product);
                    subProductsContainer.appendChild(productElement);
                });
            }
            const currentProductCategory = product.category;
            const currentProductId = product.id;
            displaySubProducts(currentProductCategory, currentProductId);
        }
        
    }
});

