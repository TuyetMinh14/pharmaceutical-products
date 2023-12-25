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
    const user = JSON.parse(localStorage.getItem('dangnhap'))|| []
        const a = user.usernames + 1 ||[]    
    const productsData = [
        {
            id: 1,
            imgSrc: "https://data-service.pharmacity.io/pmc-upload-media/production/pmc-ecm-core/products/P17315_1_l.webp",
            alt: "post",
            category: "Thuốc không kê đơn",
            categoryName: "Dược Phẩm",
            name: "Acetylcystein 200 Imexpharm (10 vỉ x 10 viên)",
            price: 147000,
            info: "Hoạt chất: Acetylcysteine. Công dụng: Điều trị các bệnh lý đường hô hấp có đờm nhầy quánh như viêm phế quản cấp và mạn. Đối tượng sử dụng: Người lớn/ trẻ em trên 2 tuổi. Hình thức: Viên nang cứng. Thương hiệu: Imexpharm. Nơi sản xuất: Việt Nam. *Thuốc chỉ dùng theo đơn của bác sĩ",
            description: "Thành phần. Acetylcysteine 200mg. Tá dược: Đường trắng, Mannitol, Dinatri hydrophosphat khan, Bột mùi dâu, Aspartam, Colloidal anhydrous silica. Chỉ định (Thuốc dùng cho bệnh gì?). Thuốc Acetylcystein 200 mg được chỉ định dùng trong các trường hợp sau: - Điều trị các bệnh lý đường hô hấp có đờm nhầy quánh như viêm phế quản cấp và mạn. - Dùng làm thuốc tiêu chất nhầy trong bệnh nhầy nhớt (mucoviscidosis) như xơ nang tuyến tụy.",
            // subImg: "",
            // addDescription: "Chống chỉ định (Khi nào không nên dùng thuốc này?) Thuốc Acetylcystein 200 mg chống chỉ định trong các trường hợp sau - Quá mẫn với acetylcystein hay bất kỳ thành phần nào của thuốc. - Người có tiền sử hen (nguy cơ phản ứng co thắt phế quản với tất cả các dạng thuốc chứa acetylcystein). - Trẻ em dưới 2 tuổi. Liều dùng và cách dùng - Dạng bào chế của viên nang cứng Acetylcystein 200mg không thích hợp sử dụng cho trẻ em từ 2 đến 6 tuổi. - Người lớn và trẻ em trên 6 tuổi: 1 viên/lần x 3 lần/ngày. Lưu ý: Liều dùng trên chỉ mang tính chất tham khảo. Liều dùng cụ thể tùy thuộc vào thể trạng và mức độ diễn tiến của bệnh. Để có liều dùng phù hợp, bạn cần tham khảo ý kiến bác sĩ hoặc chuyên viên y tế. Tác dụng phụ Khi sử dụng thuốc Acetylcystein 200 mg bạn có thể gặp các tác dụng không mong muốn (ADR). Thường gặp, ADR > 1/100 - Buồn nôn, nôn. Ít gặp, 1/1000 < ADR < 1/100 - Buồn ngủ, nhức đầu, ù tai, viêm miệng, chảy nước mũi nhiều, phát ban, mày đay. Hiếm gặp, ADR < 1/1000 - Co thắt phế quản kèm phản ứng dạng phản vệ toàn thân, sốt, rét run. Hướng dẫn cách xử trí ADR - Khi gặp tác dụng phụ của thuốc, cần ngưng sử dụng và thông báo cho bác sĩ hoặc đến cơ sở y tế gần nhất để được xử trí kịp thời. Thận trọng (Những lưu ý khi dùng thuốc) - Cần giám sát chặt chẽ người có tiền sử dị ứng vì có nguy cơ phát hen. - Nếu có co thắt phế quản, phải dùng thuốc phun mù giãn phế quản như salbutamol (thuốc beta-2 adrenergic chọn lọc, tác dụng ngắn) hoặc ipratropium (thuốc kháng muscarin) và phải ngừng sử dụng acetylcystein. - Khi điều trị với acetylcystein, có thể xuất hiện nhiều đờm loãng ở phế quản, cần phải hút để lấy ra nếu người bệnh giảm khả năng ho. Sử dụng thuốc cho phụ nữ có thai và cho con bú: - Phụ nữ có thai: Thuốc dùng được cho phụ nữ có thai. - Phụ nữ cho con bú: Thuốc dùng được cho phụ nữ đang cho con bú. Ảnh hưởng của thuốc lên khả năng lái xe, vận hành máy móc - Thuốc không ảnh hưởng đến khả năng lái xe và vận hành máy móc. Tương tác thuốc (Những lưu ý khi dùng chung thuốc với thực phẩm hoặc thuốc khác) - Acetylcystein là một chất khử nên không phù hợp với các chất oxy - hóa. - Không được dùng đồng thời các thuốc ho khác hoặc bất cứ thuốc nào làm giảm bài tiết phế quản trong thời gian điều trị bằng acetylcystein. Bảo quản: Nhiệt độ dưới 30°C, tránh ẩm và ánh sáng Đóng gói: Hộp 10 vỉ x 10 viên Thương hiệu: Imexpharm Nơi sản xuất: Việt Nam Mọi thông tin trên đây chỉ mang tính chất tham khảo. Việc sử dụng thuốc phải tuân theo hướng dẫn của bác sĩ, dược sĩ. Vui lòng đọc kĩ thông tin chi tiết ở tờ rơi bên trong hộp sản phẩm."
            
        },
        {   
            id: 2,
            imgSrc: "https://data-service.pharmacity.io/pmc-upload-media/production/pmc-ecm-core/products/P18107_1_l.webp",
            alt: "post",
            category: "Thuốc không kê đơn",
            categoryName: "Dược Phẩm",
            name: "Agiparofen 525mg (Hộp 5 vỉ x 10 viên)",
            price: 50000,
            info: "Hoạt chất: Acetaminophen 325mg, Ibuprofen 200mg. Công dụng: Giảm đau từ nhẹ đến vừa các chứng đau liên quan đến đau đầu, đau lưng, đau bụng kinh... Đối tượng sử dụng: Trên 12 tuổi. Hình thức: Viên nén. Thương hiệu: Agimexpharm. Nơi sản xuất: Chi Nhánh Công Ty CP Dược Phẩm Agimexpharm - Nhà Máy Sản Xuất Dược Phẩm Agimexpharm (Việt Nam)",
            description: "Thành phần. Viên nén có chứa: - Hoạt chất: Acetaminophen 325mg, Ibuprofen 200mg. - Tá dược vừa đủ 1 viên. Chỉ định (Thuốc dùng cho bệnh gì?). Giảm đau từ nhẹ đến vừa các chứng đau liên quan đến đau đầu, đau lưng, đau bụng kinh, đau răng, đau xương khớp, triệu chứng của cảm lạnh và cảm cúm, đau họng và sốt. Phù hợp trong các trường hợp đau không đáp ứng với một trong hai thuốc paracetamol hay ibuprofen đơn độc.",
            subImg: "https://data-service.pharmacity.io/pmc-upload-media/production/pmc-ecm-core/products/P18107_2_l.webp"            
            // addDescription: "Chống chỉ định (Khi nào không nên dùng thuốc này?). - Quá mẫn với paracetamol, ibuprofen hay bất cứ thành phần nào của thuốc, có tiền sử với các NSAIDs (ví dụ: Co thắt phế quản, mày đay, ban, hen phế quản,...). - Bệnh nhân có tiền sử xuất huyết tiêu hóa liên quan đến NSAIDs. - Sử dụng đồng thời với các thuốc chứa NSAIDs (bao gồm cả thuốc ức chế chọn lọc COX2) và các thuốc có thành phần paracetamol. - Loét dạ dày - tá tràng tiến triển. - Người bệnh đang được điều trị bằng thuốc chống đông coumarin. - Người bị hen hay bị co thắt phế quản, rối loạn chảy máu. - Người bệnh suy gan, suy tim sung huyết, bị giảm khối lượng tuần hoàn do thuốc lợi niệu hoặc bị suy thận (tăng nguy cơ rối loạn chức năng thận). - Phụ nữ có thai trong 3 tháng đầu và 3 tháng cuối. - Trẻ em dưới 12 tuổi. Liều dùng và cách dùng. * Cách dùng. Uống thuốc sau bữa ăn. *Liều dùng. Thuốc dùng cho người lớn với liều thông thường như sau: Giảm đau, kháng viêm: - Trường hợp cấp tính: 1 - 2 viên/lần, 3 - 4 lần/ngày. - Duy trì: 1 viên/lần, 3 lần/ngày. - Liều tối đa khuyến cáo là 12 viên/ngày. Điều trị cảm sốt: - 1 - 2 viên/lần, 3 lần/ngày. - Liều tối đa khuyến cáo là 6 viên/ngày. Đau bụng kinh: - 1 viên/lần, 3 - 4 lần/ngày, cần dùng ngay khi bị đau, nếu cần tăng lên 2 viên/lần, nhưng không quá 6 viên/ngày. - Khoảng cách giữa các liều ít nhất là 4 giờ. - Nếu không có chỉ định của thầy thuốc, người bệnh không được tự dùng thuốc này để điều trị giảm đau quá 10 ngày hoặc điều trị giảm sốt quá 3 ngày. Lưu ý: Liều dùng trên chỉ mang tính chất tham khảo. Liều dùng cụ thể tùy thuộc vào thể trạng và mức độ diễn tiến của bệnh. Để có liều dùng phù hợp, bạn cần tham khảo ý kiến bác sĩ hoặc chuyên viên y tế. Tác dụng phụ. Agiparofen ít có tác dụng phụ khi được dùng với liều và thời gian đề nghị, cần lưu ý nguy cơ huyết khối tim mạch (xem thêm phần các tình trạng cần thận trọng), có thể xảy ra một số tác dụng không mong muốn như sau: Thường gặp, ADR >1/100. - Rối loạn tiêu hóa: Đau bụng, nôn mửa, tiêu chảy, buồn nôn, khó tiêu và khó chịu ở bụng. - Rối loạn da và mô dưới da: Phát ban, mẩn ngứa. Ít gặp, 1/100 > ADR > 1/1000. - Rối loạn hệ thống miễn dịch: Quá mẫn, mày đay và ngứa. - Rối loạn hệ thống thần kinh: Nhức đầu và chóng mặt. - Rối loạn tiêu hóa: Loét dạ dày tá tràng, thông đường tiêu hóa hoặc xuất huyết tiêu hóa, nôn ra máu, loét miệng, đợt cấp của viêm đại tràng và bệnh Crohn viêm dạ dày, viêm tụy, đầy hơi và táo bón. - Máu: Thời gian máu chảy kéo dài. Rất hiếm gặp, ADR < 1/10000. - Rối loạn chung: Mệt mỏi, uể oải. - Rối loạn máu và hệ thống bạch huyết: Rối loạn tạo máu (giảm bạch cầu trung tính, giảm toàn thể huyết cầu, giảm bạch cầu), thiếu máu. - Rối loạn hệ thống miễn dịch: Phản ứng quá mẫn nghiêm trọng. Các triệu chứng có thể bao gồm mặt, lưỡi và sưng họng, khó thở, tim đập nhanh, hạ huyết áp (sốc phản vệ, phù mạch hay sốc nặng). - Rối loạn tâm thần: Nhầm lẫn, trầm cảm và ảo giác. - Rối loạn hệ thống thần kinh: Trầm cảm, viêm màng não vô khuẩn, viêm dây thần kinh thị giác và buồn ngủ. - Rối loạn mắt: Rối loạn thị giác. - Tai: Thính lực giảm, ù tai và chóng mặt. - Rối loạn tim: Suy tim và phù. - Rối loạn mạch máu: Tăng huyết áp. - Rối loạn hô hấp: Phản ứng hô hấp bao gồm: bệnh hen suyễn, đợt cấp của bệnh hen suyễn, co thắt phế quản và khó thở. - Rối loạn gan mật: Chức năng gan bất thường, viêm gan và vàng da. - Rối loạn da và mô dưới da: Phản ứng bóng nước bao gồm hội chứng Stevens-Johnson, hồng ban đa dạng và hoại tử biểu bì nhiễm độc. Da tróc vảy, ban xuất huyết, nhạy cảm ánh sáng. - Rối loạn thận và tiết niệu: Độc tính trên thận với các hình thức khác nhau, bao gồm cả viêm thận kẽ, hội chứng thận hư, suy thận cấp tính và mãn tính. - Hướng dẫn cách xử trí ADR. Khi gặp tác dụng phụ của thuốc, cần ngưng sử dụng và thông báo cho bác sĩ hoặc đến cơ sở y tế gần nhất để được xử trí kịp thời. Thận trọng (Những lưu ý khi dùng thuốc). Các tình trạng cần thận trọng: - Người thiếu men G6PD. - Bác sỹ cần cảnh báo bệnh nhân về các dấu hiệu của phản ứng trên da nghiêm trọng như hội chứng Steven-Johnson (SJS), hội chứng hoại tử da nhiễm độc (TEN) hay hội chứng Lyell, hội chứng ngoại ban mụn mủ toàn thân cấp tính (AGEP). - Khi bắt đầu điều trị, cần theo dõi thật kỹ sự bài tiết nước tiểu và chức năng thận ở bệnh nhân bị suy tim, xơ gan và hư thận, ở bệnh nhân đang dùng thuốc lợi tiểu, bị suy thận mạn tính và đặc biệt ở người già. - Ibuprofen có thể gây loét, chảy máu hoặc thủng dạ dày và ruột, cần theo dõi những bệnh nhân đã có tiền sử loét dạ dày-tá tràng, thoát vị hoành hoặc xuất huyết tiêu hóa. Thuốc nên được sử dụng một cách thận trọng, với liều hiệu quả thấp nhất và trong thời gian ngắn nhất ở những bệnh nhân này. - Cẩn thận khi sử dụng ở bệnh nhân có bệnh thiếu máu từ trước, bệnh tim và tăng huyết áp, bệnh tim thiếu máu cục bộ, bệnh động mạch ngoại biên, và/ hoặc bệnh mạch máu não. Ibuprofen có thể làm tăng huyết áp hoặc làm nặng hơn bệnh tăng huyết áp, làm tăng nguy cơ các biến cố tim mạch, tăng nguy cơ biến cố tim mạch nghiêm trọng do huyết khối. Nguy cơ huyết khối tim mạch: - Các thuốc chống viêm không steroid (NSAIDs), không phải aspirin, dùng đường toàn thân, có thể làm tăng nguy cơ xuất hiện biến cố huyết khối tim mạch, bao gồm cả nhồi máu cơ tim và đột quỵ, có thể dẫn đến tử vong. Nguy cơ này có thể xuất hiện sớm trong vài tuần đầu dùng thuốc và có thể tăng lên theo thời gian dùng thuốc. Nguy cơ huyết khối tim mạch được ghi nhận chủ yếu ở liều cao. - Bác sĩ cần đánh giá định kỳ sự xuất hiện của các biến cố tim mạch, ngay cả khi bệnh nhân không có các triệu chứng tim mạch trước đó. Bệnh nhân cần được cảnh báo về các triệu chứng của biến cố tim mạch nghiêm trọng và cần thăm khám bác sĩ ngay khi xuất hiện các triệu chứng này. - Để giảm thiểu nguy cơ xuất hiện biến cố bất lợi, cần sử dụng Agiparofen ở liều hàng ngày thấp nhất có hiệu quả trong thời gian ngắn nhất có thể. - Thận trọng khi sử dụng ở bệnh nhân trên 65 tuổi vì tăng nguy cơ tác dụng phụ như suy tim, loét đường tiêu hóa và suy thận. Những người cần điều trị hơn 10 ngày nên tham khảo ý kiến bác sỹ. - Thành phần tá dược của thuốc này có lactose vì vậy không nên dùng thuốc này cho bệnh nhân bị di truyền không dung nạp galactose, bị thiếu hụt lactase hoặc kém hấp thu glucose-galactose. * Khả năng lái xe và vận hành máy móc. Người điều khiển phương tiện giao thông và sử dụng máy móc cần lưu ý về nguy cơ bị chóng mặt khi dùng thuốc. * Thời kỳ mang thai. Cẩn thận khi dùng trong ba tháng đầu của thai kỳ. Tuyệt đối không dùng trong 3 tháng cuối của thai kỳ (nguy cơ nhiễm độc thai: Ở thận và tim phổi thai nhi, với sự đóng sớm ống động mạch) và tuyệt đối chống chỉ định trong vài ngày trước khi sinh (do nguy cơ xuất huyết ở mẹ và cả con do kéo dài thời gian chảy máu). * Thời kỳ cho con bú. Cẩn thận khi dùng cho phụ nữ đang cho con bú. Ibuprofen và paracetamol đều tiết trong sữa mẹ, tuy nhiên với lượng rất nhỏ không ảnh hưởng trên lâm sàng. Không cần thiết phải dừng cho con bú nếu điều trị trong thời gian ngắn. Tương tác thuốc (Những lưu ý khi dùng chung thuốc với thực phẩm hoặc thuốc khác). Không dùng Agiparofen chung với các thuốc khác có chứa paracetamol, ibuprofen hoặc các thuốc kháng viêm không steroid. Liên quan đến paracetamol: - Paracetamol làm tăng nhẹ tác dụng chống đông của coumarin và dẫn chất indandion khi uống dài ngày liều cao. - Rượu, thuốc chống co giật (phenytoin, barbiturat, carbamazepin) và isoniazid có thể làm tăng độc tính của paracetamol đối với gan. - Tốc độ hấp thu paracetamol tăng khi dùng cùng metoclopramid hoặc domperidon. - Paracetamol giảm hấp thu khi dùng đồng thời với cholestyramin, do đó không nên uống cholestyramin trong vòng 1 giờ nếu cần giảm đau tối đa. - Paracetamol làm tăng nồng độ trong huyết tương của cloramphenicol. Liên quan đến ibuprofen: - Kháng sinh nhóm quinolon: Ibuprofen làm tăng tác dụng phụ của kháng sinh nhóm quinolon lên hệ thần kinh trung ương và có thể dẫn đến co giật. - Ibuprofen làm tăng độc tính của methotrexat. - Glucosid tim: Ibuprofen có thể làm tăng nồng độ glucosid tim như digoxin, trong huyết tương. - Furosemid, các thiazid: Ibuprofen có thể làm giảm tác dụng bài xuất natri niệu của furosemid và các thuốc lợi tiểu. - Corticoid và các thuốc chống viêm không steroid khác: Dùng ibuprofen chung với corticoid và các thuốc chống viêm không steroid khác kể cả aspirin làm tăng nguy cơ chảy máu, viêm loét dạ dày tá tràng, - Chất chống đông máu, bao gồm warfarin: Dùng chung với ibuprofen làm tăng nguy cơ gây chảy máu nặng và xuất huyết đường tiêu hóa. - Thuốc điều trị tăng huyết áp: Ibuprofen có thể làm giảm tác dụng chống tăng huyết áp của thuốc ức chế men chuyển, thuốc chẹn bêta và thuốc lợi tiểu và có thể gây tăng natri niệu và tăng kali máu ở những bệnh nhân đang dùng các thuốc này. - Lithi: Ibuprofen có thể làm tăng nồng độ của lithi trong huyết tương và làm giảm thải trừ lithi qua thận. - Zidovudin: Ibuprofen có thể kéo dài thời gian chảy máu ở những bệnh nhân được điều trị bằng zidovudin. - Mifepriston: Ibuprofen không nên được sử dụng 8 - 12 ngày sau khi dùng mifepriston do NSAIDs có thể làm giảm tác dụng của mifepriston. - Tacrolimus, ciclosporin: Tăng nguy cơ độc tính trên thận khi dùng chung với ibuprofen. - Ibuprofen cũng có thể tương tác với probenecid, thuốc trị đái tháo đường và phenyltoin. Bảo quản: Nơi thoáng mát, tránh ánh sáng và nhiệt độ trên 30oC. Đóng gói: Hộp 5 vỉ x 10 viên. Thương hiệu: Agimexpharm. Nơi sản xuất: Chi Nhánh Công Ty CP Dược Phẩm Agimexpharm (Việt Nam). Mọi thông tin trên đây chỉ mang tính chất tham khảo. Việc sử dụng thuốc phải tuân theo hướng dẫn của bác sĩ, dược sĩ. Vui lòng đọc kĩ thông tin chi tiết ở tờ rơi bên trong hộp sản phẩm."
        },
        {
            id: 3,
            imgSrc: "https://data-service.pharmacity.io/pmc-upload-media/production/pmc-ecm-core/products/P03195_1_l.webp",
            alt: "post",
            category: "Thuốc kê đơn",
            categoryName: "Dược Phẩm",
            name: "Acnotin 20 (Hộp 3 vỉ x 10 viên)",
            price: 100000,
            info: "Lưu ý: Sản phẩm này chỉ bán khi có chỉ định của bác sĩ, mọi thông tin trên Website, App chỉ mang tính chất tham khảo. Vui lòng xác nhận bạn là dược sĩ, bác sĩ, nhân viên y tế có nhu cầu tìm hiểu về sản phẩm này. Hoạt tính: Drotaverin HCI 40mg. Công dụng: Điều trị mụn trứng cá toàn thân, mụn nặng... Hình thức: Viên nang mềm. Thương hiệu: MEGA (Thái Lan). *Thuốc chỉ dùng theo đơn của bác sĩ.",
            description: "Thành phần Mỗi viên nang gelatin mềm chứa: - Hoạt chất: Isotretinoin (USP) 20mg - Tá dược: Sáp ong trắng, Butylated hydroxyanisol, dinatri Edetat, Dầu thực vật hydro hóa một phần, Dầu đậu nành. - Vỏ nang: Gelatin, Glycerin, Dung dịch sorbitol 76%, Carmoisin (E122), Màu xanh (FD &amp; C Blue No.1), Ponceau 4R (E124), Oxyd sắt đen (E172), Titan dioxyd (E171), Nước tinh khiết. Chỉ định (Thuốc dùng cho bệnh gì?) Isotretinoin là một retinoid điều trị mụn trứng cá toàn thân, chỉ định trong trường hợp mụn trứng cá nặng, mụn trứng cá không đáp ứng với các phương pháp điều trị thông thường, mụn trứng cá gây biến dạng mặt để lại nhiều sẹo xấu, mụn trứng cá kéo dài lâu năm gây ảnh hưởng.",
            subImg: "https://data-service.pharmacity.io/pmc-upload-media/production/pmc-ecm-core/products/P03195_2_l.webp"
            // addDescription: "trầm trọng đến nghề nghiệp, tâm lý xã hội. Chống chỉ định (Khi nào không nên dùng thuốc này?) Không dùng Isotretinoin cho những trường hợp sau: - Bệnh nhân suy chức năng gan và suy chức năng thận, bệnh nhân ngộ độc Vitamin A, bệnh nhân tăng lipid máu, bệnh nhân mẫn cảm với Isotretinoin và bất kỳ thành phần nào của thuốc. - Không dùng đồng thời Isotretinoin với các kháng sinh tetracylin. - Phụ nữ đang mang thai, hoặc có dự định mang thai và phụ nữ đang cho con bú. - Không dùng máu của bệnh nhân đang sử dụng hoặc có sử dụng Isotretinoin 1 tháng trước đó để truyền máu cho những phụ nữ trong thời gian dự định có thai. Liều dùng Liều dùng thông thường ở người lớn và thanh niên là 0.5-1mg/kg cân nặng mỗi ngày (chia thành hai liều, dùng trong bữa ăn) trong 15 - 20 tuần. Liều tối đa là 2mg/kg cân nặng mỗi ngày được áp dụng cho những bệnh nhân bị mụn trứng cá rất nặng hoặc mụn ban đầu xuất hiện ở ngực hay lưng thay vì ở mặt. Hiệu quả điều trị và tác dụng phụ của thuốc có thể khác nhau ở từng bệnh nhân sau 4 tuần điều trị, do đó nên điều chỉnh liều điều trị duy trì trong khoảng từ 0.1 - 1mg/kg cân nặng mỗi ngày, tuỳ từng trường hợp cụ thể. Trong thời gian đầu điều trị bằng isotretinoin, mụn trứng cá có thể xuất hiện nhiều hơn một chút và thoáng qua, đôi khi cần điều trị kết hợp với liệu pháp adrenocorticoid. Thời gian điều trị thường kéo dài khoảng 16 tuần. Khi đánh giá hiệu quả điều trị cần lưu ý rằng tình trạng bệnh vẫn được cải thiện ngay cả khi ngưng dùng thuốc. Do đó, nên ngưng ít nhất 8 tuần trước khi bắt đầu điều trị nhắc lại bằng isotretinoin và liều điều trị nhắc lại cũng giống như liều điều trị ban đầu. Dùng đồng thời với các thuốc bôi tại chỗ: không được dùng đồng thời với các thuốc điều trị mụn trứng cá bôi tại chỗ có tác dụng làm bong da, tiêu sừng hoặc xạ trị bằng tia cực tím. Bệnh nhân nên hạn chế tiếp xúc trực tiếp với ánh sáng mặt trời. Nếu cần có thể hỗ trợ điều trị bằng thuốc trị mụn trứng cá bôi tại chỗ có tác dụng nhẹ. Thuốc không phù hợp đề điều trị mụn trứng cá ở trẻ em dưới 12 tuổi. Tác dụng phụ Phần lớn tác dụng phụ của isotretinoin liên quan đến liều, ở liều thông thường, tỉ lệ giữa nguy cơ và lợi ích của thuốc là chấp nhận được. Các tác dụng phụ có thể xảy ra như sau: - Triệu chứng thừa vitamin A: thường bị khô da, niêm mạc, nứt môi, chảy máu cam, viêm kết mạc mắt, đục giác mạc có hồi phục và không sử dụng được kính áp tròng. Da và các phần phụ khác: ngoại ban, ngứa, viêm da, đổ mồ hôi u hạt mưng mủ, viêm quanh móng, teo móng, tăng tạo mô hạt, rụng tóc, xuất hiện nhiều trứng cá, rậm lông, tăng sắc tố, da tăng nhạy cảm với ánh sáng. - Cơ và xương: đau cơ, đau khớp, tăng sinh xương, viêm gân và các thay đổi khác về xương. Tâm thần và hệ thần kinh trung ương: rối loạn hành vi, trầm cảm, đau đầu, tăng áp lực nội sọ, động kinh. - Giác quan: rối loạn thị trường, giảm thính lực ở một vài tần số nhất định, sợ ánh sáng, rối loạn thích ứng trong bóng tối (giảm thị trường về đêm), đục thủy tinh thể, viêm giác mạc. - Hệ tiêu hoá: buồn nôn, viêm đại tràng, viêm hồi tràng và kết tràng, chảy máu tiêu hoá. - Gan, mật: tăng men gan tạm thời và có hồi phục, đôi khi có trường hợp bị viêm gan. Trong rất nhiều trường hợp, sự thay đổi vẫn nằm trong giới hạn bình thường và trở về giá trị ban đầu ngay trong thời gian điều trị. Tuy nhiên, vẫn có một số trường hợp phải giảm liều hoặc ngưng dùng thuốc. - Hô hấp: co thắt phế quản - Máu: giảm bạch cầu, hồng cầu, tăng hoặc giảm tiểu cầu, tăng tốc độ lắng máu - Xét nghiệm cận lâm sàng: tăng cholesterol và triglycerid huyết thanh, tăng acid uric huyết. Đã ghi nhận trường hợp giảm HDL, nhất là ở liều cao và ở những bệnh nhân mà gia đình có tiền sử rối loạn chuyển hoá lipid, đái tháo đường, béo phì hoặc nghiện rượu. Những thay đổi này có liên quan đến liều và sẽ trở về bình thường khi giảm liều hoặc ngưng dùng thuốc. Tuy nhiên, vẫn phải cảnh báo cho bệnh nhân về những tác dụng phụ có thể xảy ra khi dùng thuốc. - Ảnh hưởng đến sức đề kháng: nhiễm trùng tại chỗ hoặc toàn thân do vi khuẩn Gram dương (Staphylococcus Aureus). Thông báo cho Bác sĩ những tác dụng không mong muốn gặp phải khi sử dụng thuốc. Thận trọng (Những lưu ý khi dùng thuốc) Cảnh báo: - Tuyệt đối tuân theo hướng dẫn sử dụng. - Không được có thai trong thời gian dùng thuốc. - Có nguy cơ gây dị tật thai nhi nếu có thai trong thời gian dùng thuốc. Thận trọng: - Chỉ dùng isotretinoin theo chỉ định của thầy thuốc có kinh nghiệm điều trị retinoid toàn thân (tốt nhất là bác sĩ da liễu) và hiểu rõ về những nguy cơ sinh quái thai nếu dùng cho phụ nữ có thai. - Phải kiểm tra chức năng gan trước khi điều trị, 1 tháng sau khi bắt đầu điều trị và định kỳ mỗi 3 tháng sau đó. Nồng độ lipid huyết thanh cũng nên đựơc kiểm tra trước khi điều trị, 1 tháng sau khi điều trị và sau 3-4 tháng điều trị. - Đã có báo cáo về trường hợp trầm cảm, loạn thần hoặc có ý định tử tự và tự tử liên quan đến việc điều trị bằng isotretinoin. Mặc dù chưa rõ cơ chế nhưng phải quan tâm chăm sóc đặc biệt đối với bệnh nhân có tiền sử bệnh trầm cảm và phải theo dõi những dấu hiệu này ở tất cả các bệnh nhân để có biện pháp điều trị thích hợp. - Khám bác sĩ khi có vấn đề về thị lực hoặc cảm thấy khó chịu khi đeo kính áp tròng. Giảm thị lực bao gồm các triệu chứng như sợ ánh sáng, khô mắt hoặc hoa mắt, những triệu chứng này có thể ảnh hưởng đến khả năng lái xe và vận hành máy móc. - Phải thận trọng đánh giá giữa lợi ích và nguy cơ có thể xảy ra cho bệnh nhân và chỉ dùng isotretinoin trong những trường hợp bệnh nặng. - Mụn trứng cá là bệnh có liên quan đến hormon androgen, do đó không nên dùng đồng thời với thuốc ngừa thai có chứa androgen progesterol, ví dụ như dẫn chất của 19-nortestosteron (norsteroid), nhất là trong trường hợp có vấn đề về nội tiết. - Không được lột da mặt trong thời gian dùng isotretinoin và 5 - 6 tháng sau khi ngưng thuốc do có nguy cơ gây sẹo lồi. - Không dùng các loại sáp nhổ lông trong thời gian điều trị isotretinoin cũng như trong vòng 5-6 tháng sau khi ngưng thuốc vì có nguy cơ gây viêm da. - Đối với những nhóm bệnh nhân đặc biệt: phải thường xuyên kiểm tra các số liệu cận lâm sàng đối với những bệnh nhân trong nhóm nguy cơ cao (bệnh nhân đái tháo đường, bệnh nhân béo phì, bệnh nhân nghiện rượu hoặc rối loạn về chuyển hoá lipid) đang điều trị bằng isotretinoin. Phải thường xuyên đo glucose huyết ở những bệnh nhân bị bệnh hoặc nghi ngờ bị bệnh đái tháo đường. Mặc dù chưa xác định được mối liên quan nhưng đã có báo cáo về một số trường hợp tăng glucose huyết rất nhanh, nguy cơ viêm tụy, viêm ruột, ảnh hưởng trên tai, hệ cơ xương và một số trường hợp đái tháo đường mới được phát hiện trong thời gian dùng isotretinoin. Khô miệng có thể gây ra những vấn đề về răng và làm trầm trọng hơn những bệnh răng miệng như sâu răng, bệnh về nướu và nhiễm nấm. Để hạn chế những vấn đề về răng có thể dùng dung dịch thay thế nước bọt, ngậm kẹo không đường, hoặc nước đá. Thai kỳ Isotretinoin có nguy cơ gây sinh quái thai cao. Do đó, không dùng isotretinoin cho phụ nữ có thai hoặc dự định có thai trong thời gian dùng thuốc. Nguy cơ rất cao đối với thai nhi nếu người mẹ có thai trong thời gian dùng thuốc ở bất kỳ liều nào, ngay cả khi chỉ điều trị trong thời gian ngắn. Những bất thường về thai nhi có liên quan đến isotretinoin đã được ghi nhận bao gồm não úng thuỷ, tật đầu nhỏ, các bất thường ở tai ngoài (nhỏ hoặc không có ống tai ngoài), teo nhãn cầu, bất thường hệ tim mạch và các dị dạng về não. Isotretinoin có tính ưa lipid cao, nên dễ bài xuất vào sữa mẹ. Không dùng isotretinoin trong thời gian cho con bú do có nguy cơ gây tác dụng phụ cho trẻ. Phải dùng đồng thời 2 phương pháp ngừa thai hiệu quả liên tục trong 1 tháng trước khi bắt đầu điều trị, trong suốt thời gian điều trị và 1 tháng sau khi ngưng điều trị. Thăm khám để nhắc nhở bệnh nhân về tầm quan trọng của việc ngừa thai. Nếu có thai trong thời gian dùng thuốc, phải hỏi ý kiến bác sĩ về việc có nên tiếp tục có thai hay không. Chỉ bắt đầu dùng isotretinoin vào ngày thứ 2 hoặc thứ 3 của kỳ kinh kế tiếp. <u>Lái xe</u> Bệnh nhân sử dụng Isotretinoin nên thận trọng khi lái xe và vận hành máy móc nếu có triệu chứng về thị giác như hoa mắt, buồn ngủ khi sử dụng thuốc. Tương tác thuốc (Những lưu ý khi dùng chung thuốc với thực phẩm hoặc thuốc khác) Không dùng đồng thời isotretinoin và vitamin A do có thể làm tăng triệu chứng thừa vitamin A. Đã ghi nhận một vài trường hợp bị tăng áp lực nội sọ khi dùng phối hợp isotretinoin và tetracylin. Do đó, không dùng tetracylin trong thời gian điều trị isotretinoin. Tác dụng của progesteron liều thấp có thể bị giảm khi dùng đồng thời với isotretinoin. Do đó, không được dùng các chế phẩm có chứa progesteron liều thấp trong thời gian điều trị isotretinoin. Phenytoin: thận trọng khi dùng kết hợp phenytoin và isotretinoin đồng thời vì có thể giảm tác dụng thuốc. Ketoconazol: dùng đồng thời có thể làm tăng nồng độ huyết thanh của corticosteroid trong huyết tương do làm giảm thanh thải của hai thuốc này. Điều chỉnh liều dùng corticosteroid có thể là cần thiết nếu dùng đồng thời.  Bảo quản: Bảo quản nơi khô mát, dưới 30°C. Tránh ánh sáng trực tiếp.  Đóng gói: Hộp 3 vỉ x 10 viên Thương hiệu: MEGA  Nơi sản xuất: MEGA Lifesciences Ltd (Thái Lan)  Mọi thông tin trên đây chỉ mang tính chất tham khảo. Việc sử dụng thuốc phải tuân theo hướng dẫn của bác sĩ, dược sĩ. Vui lòng đọc kĩ thông tin chi tiết ở tờ rơi bên trong hộp sản phẩm."
        },
        {
            id: 4,
            imgSrc: "https://data-service.pharmacity.io/pmc-upload-media/production/pmc-ecm-core/__sized__/products/P26350_1-thumbnail-510x510-70.jpg",
            alt: "post",
            category: "Thực phẩm dinh dưỡng",
            categoryName: "Chăm sóc sức khỏe",
            name: "Abbott Ensure Gold sữa bột hương vani ít ngọt (850g)",
            price: 806000,
            info: "Ensure Gold Ít Ngọt là công thức dinh dưỡng đầy đủ và cân đối. Với hơn 30 nghiên cứu khoa học trong suốt 50 năm có mặt, Ensure được chứng minh lâm sàng giúp phục hồi và tăng cường sức khỏe, tăng cường miễn dịch và chất lượng cuộc sống. Ensure Gold mới với hệ dưỡng chất StrengthPro gồm HMB, YBG và nhiều dưỡng chất khác.",
            description: "Thành phần. Tinh bột bắp thuỷ phân, DẦU THỰC VẬT (dầu hướng dương giàu oleic, dầu đậu nành, dầu hạt cải), sucrose, natri caseinat, đạm đậu nành tinh chế, oligofructose, đạm whey cô đặc, KHOÁNG CHẤT (kali citrat, tricanxi phosphat, magiê sulfat, magiê clorid, kali clorid, natri citrat, dikali hydrophosphat, natri clorid, canxi carbonat, kali hydroxid, sắt sulfat, kẽm sulfat, mangan sulfat, đồng sulfat, crôm clorid, kali iodid, natri molybdat, natri selenat), canxi β-hydroxy-β-methylbutyrat monohydrat (CaHMB), hương vani tổng hợp, Beta Glucan từ nấm men (YBG), VITAMIN (acid ascorbic, ascorbyl palmitat, Vitamin E, hỗn hợp tocopherol, canxi pantothenat, niacinamid, pyridoxin hydroclorid, riboflavin, thiamin hydroclorid, Vitamin A palmitat, vitamin D3, acid folic, beta caroten, phylloquinon, biotin, cyanocobalamin), cholin clorid, taurin, l-carnitin.",
            subImg: "https://data-service.pharmacity.io/pmc-upload-media/production/pmc-ecm-core/products/P26350_3.jpg"            
            // addDescription: "Công dụng. Ensure Gold bổ sung dinh dưỡng đầy đủ và cân đối, vitamin, khoáng chất giúp phục hồi và tăng cường sức khỏe. HMB và đạm chất lượng cao giúp bảo vệ, xây dựng và phát triển khối cơ. YBG (Beta Glucan từ nấm men) và 12 dưỡng chất giúp tăng cường miễn dịch theo 5 cách thức. Giàu Omega-3, Omega-6, Omega-9 nguồn gốc thực phận hỗ trợ sức khỏe tim mạch. 28 vitamin và khoáng chất thiết yếu giúp cơ thể khỏe mạnh. Chất xơ FOS hỗ trợ tiêu hóa khỏe mạnh. Các chất chống oxy hóa (Beta caroten, Vitamin C, E, Kẽm và Selen) giúp bảo vệ cơ thể. Giàu Canxi, Phospho và Vitamin D giúp xương chắc khỏe. Đối tượng sử dụng. Người lớn, người ăn uống kém, người bệnh cần phục hồi nhanh. Chú ý: Không chứa Gluten. Rất ít Trans Fat và Lactose, phù hợp cho người bất dung nạp Lactose. Không dùng cho người bệnh Galactosemia. Không dùng qua đường tĩnh mạch. Không dùng cho trẻ em trừ khi có hướng dẫn của chuyên gia y tế. Sử dụng cho người bệnh với sự giám sát của nhân viên y tế. Hướng dẫn sử dụng. Để pha 230 ml, cho 185 ml nước chín nguội vào ly, vừa từ từ cho vào 6 muỗng gạt ngang (muỗng có sẵn trong hộp, mỗi muỗng tương đương 10,1g) hay 60,6g bột Ensure Gold vừa khuấy đều cho đến khi bột tan hết. Khi pha theo đúng hướng dẫn, 1ml Ensure Gold cung cấp khoảng 1,14kcal. Hộp 850g bột có thể pha được khoảng 14 ly, mỗi ly 230 ml. Bổ sung chế độ ăn: 2 ly/ ngày hoặc theo hướng dẫn của chuyên viên dinh dưỡng. Thay thế hoàn toàn bữa ăn qua ống thông cho người bệnh: Theo hướng dẫn của bác sỹ hoặc chuyên viên dinh dưỡng. Dùng nuôi qua ống thông: Theo hướng dẫn của bác sĩ/chuyên gia dinh dưỡng. Khi bắt đầu nuôi ăn qua ống thông, lưu lượng, thể tích và độ pha loãng được điều chỉnh tùy thuộc vào tình trạng và sự dung nạp của gười bệnh. Lưu ý đề phòng sự nhiễm khuẩn trong quá trình chuẩn bị và nuôi ăn qua ống thông. Bảo quản. Bảo quản hộp chưa mở ở nhiệt độ phòng. Hộp đã mở phải được đậy kín và bảo quản ở nơi khô mát, nhưng không cho vào tủ lạnh. Khi đã mở phải sử dụng trong vòng 3 tuần. Ensure Gold đã pha phải dùng ngay hay đậy kín cho vào tủ lạnh và dùng trong vòng 24 giờ. Khối lượng: 850g. Sản xuất tại: Singapore."
        },
        {
            id: 5,
            imgSrc: "https://data-service.pharmacity.io/pmc-upload-media/production/pmc-ecm-core/__sized__/products/P08401_11-thumbnail-510x510-70.jpg",
            alt: "post",
            category: "Thực phẩm dinh dưỡng",
            categoryName: "Chăm sóc sức khỏe",
            name: "Sữa dinh dưỡng hương Vani Ensure Gold Vigor (237ml)",
            price: 56100,
            info: "Sữa dinh dưỡng hương Vani Ensure Gold Vigor là công thức dinh dưỡng đầy đủ và cân đối dạng lỏng dùng để thay thế hoàn toàn bữa ăn hoặc để bổ sung dinh dưỡng cho người lớn tuổi, người loãng xương hoặc có nguy cơ loãng xương, người có tăng chuyển hóa canxi và phốt pho.",
            description: "",
            subImg: ""
        },
        {
            id: 6,
            imgSrc: "https://data-service.pharmacity.io/pmc-upload-media/production/pmc-ecm-core/__sized__/products/P25117_1-thumbnail-510x510-70.jpg",
            alt: "post",
            category: "Dụng cụ sơ cứu",
            categoryName: "Chăm sóc sức khỏe",
            name: "Gel cải thiện giảm bỏng rát, giảm phồng rộp da Apigen 10g",
            price: 120000,
            info: "Gel cải thiện giảm bỏng rát, giảm phồng rộp da Apigen giúp làm dịu mát da, dưỡng ẩm và làm mềm da.",
            description: "Thành phần. Water: 58,20; Niacinamide: 5,00; Isopropyl Palmitate: 5,00; Glycerin: 5,00; Propylene Glycol: 5,00; Anthemis Nobilis Flower Extract: 3,00; Aloe Barbadensis Leaf Extract: 5,00; Butylene Glycol: 3,00; 1,2 Hexanediol: 2,00; Sodium Palmitoyl Proline: 1,00; Nymphaea Alba Flower Extract: 1,00; Polyacrylate-13: 0,50; Polyisobutene: 0,50; Polysorbate 20: 0,50; Allantoin: 1,00; Acrylates/C10-30 Alkyl Acrylate Crosspolymer: 0,50; Triethanolamine: 0,50; Paeonia Lactiflora Root Extract: 0,50; Hydroxyacetophenone: 0,10; PPG-20 Methyl Glucose Ether: 0,10; Disodium EDTA: 0,10; Phenoxyethanol: 0,70; Chlorphenesin: 0,20, Fra grance: 0,10. Công dụng. Kem giúp làm dịu mát da, dưỡng ẩm, làm mềm da.",
            subImg: "https://data-service.pharmacity.io/pmc-upload-media/production/pmc-ecm-core/products/P25117_2.jpg",
            // addDescription: "Đối tượng sử dụng. Áp dụng cho những tình trạng bỏng nhẹ: Áp dụng cho bỏng lửa nhẹ và bỏng nắng. Bỏng do nấu nướng văn trúng. Bỏng do va chạm nhiệt cấp độ nhẹ. Bỏng nắng, rám da do tiếp xúc ánh nắng lâu. Rộp nước, rát da, sần sùi và khô nứt Cách sử dụng Rửa sạch tay trước khi thoa lên vùng da bị tổn thương. Dùng một lượng vừa đủ thoa lên vùng da bị ảnh hưởng từ 2-3 lần/ngày. Lưu ý: Dừng sử dụng nếu mẫn cảm với thành phần sản phẩm. Bảo quản: Nơi thoáng mát. Hạn sử dụng: 19/01/2025. Quy cách đóng gói: Tuýp 10g. Thương hiệu: UVS. Nơi sản xuất: Thái Lan. Công ty chịu trách nhiệm sản phẩm. Empowering Innovatione Co,. LTD. Công ty phân phối sản phẩm. Công ty TNHH Thương mại Kết giao và Phát triển Quốc tế (IDECO). Số Giấy công bố: 155540/21/CBMP-QLD Sản phẩm này không phải là thuốc, không có tác dụng thay thế thuốc chữa bệnh.</em>. Để xa tầm tay trẻ em. Đọc kỹ hướng dẫn sử dụng trước khi dùng."
        },
        {
            id: 7,
            imgSrc: "https://data-service.pharmacity.io/pmc-upload-media/production/pmc-ecm-core/__sized__/products/P22985_1-thumbnail-510x510-70.jpg",
            alt: "post",
            category: "Dụng cụ sơ cứu",
            categoryName: "Chăm sóc sức khỏe",
            name: "Miếng dán giảm đau xương khớp Bách Linh Diệu 10 miếng/hộp",
            price: 88000,
            info: "Miếng dán giảm đau xương khớp Bách Linh Diệu giúp cải thiện tình trạng khó chịu như đau đầu, viêm khớp, đau dây thần kinh, thoát vị đĩa đệm, căng cơ, đau vai gáy, vết bầm tím và bong gân do va đập.",
            description: "Công dụng. Miếng dán thảo dược giúp cải thiện tình trạng khó chịu như đau đầu, viêm khớp, đau dây thần kinh, thoát vị đĩa đệm, căng cơ, đau vai gáy, vết bầm tím, bong gân do va đập. Cách sử dụng. Làm sạch phần da, lau khô vùng da bị đau, gỡ miếng cao dán ra khỏi tấm che, phủ mặt ngoài và dán vào chỗ đau. Lưu ý.",
            subImg: ""
            // addDescription: "Không dán quá 4 lần/ngày, gỡ miếng dán ra sau 8 tiếng dán. Không dùng lên vùng da có viết thương hở, vết loét, người dị ứng với bất kỳ thành phần nào của sản phẩm. Bảo quản. Nơi khô ráo, tránh ánh sáng mặt trời. Để xa tầm tay trẻ em. Thương hiệu: Bách Linh Diệu. Công ty chịu trách nhiệm sản xuất sản phẩm: Fobe. Công ty phân phối sản phẩm: CÔNG TY CỔ PHẦN FOBELIFE."
        },
        {
            id: 8,
            imgSrc: "https://data-service.pharmacity.io/pmc-upload-media/production/pmc-ecm-core/__sized__/products/P21744_1-thumbnail-510x510-70.jpg",
            alt: "post",
            category: "Khẩu trang y tế",
            categoryName: "Chăm sóc sức khỏe",
            name: "Khẩu trang Jomi N95 4D (Gói 5 Cái)",
            price: 26000,
            info: "Giao ngẫu nhiên Khẩu trang Jomi N95 mẫu 3D hoặc 4D. Khẩu trang Jomi N95 4D với 03 lớp vải không dệt và màng lọc Mellblow giúp lọc không khí ô nhiễm, bụi PM2.5, ngăn 99% vi khuẩn, virus. Ngoài ra, sản phẩm còn giúp che nắng ngăn tia UV với UPF 40.",
            description: "Giao ngẫu nhiên Khẩu trang Jomi N95 mẫu 3D hoặc 4D. Khẩu trang Jomi N95 4D với 03 lớp vải không dệt và màng lọc Mellblow giúp lọc không khí ô nhiễm, bụi PM2.5, ngăn 99% vi khuẩn, virus. Ngoài ra, sản phẩm còn giúp che nắng ngăn tia UV với UPF 40. Thành phần. Phần thân 03 lớp vải không dệt và màng lọc Mellblow. Phần quai bằng elastic fabric mềm mại và co dãn tốt. Nẹp mũi bằng dây kẽm và bọc PVC.",
            subImg: "https://data-service.pharmacity.io/pmc-upload-media/production/pmc-ecm-core/products/P21744_2.jpg"
            // addDescription: "Màu sắc: Trắng. Công dụng. Lọc không khí ô nhiễm, bụi PM2.5. Ngăn 99% vi khuẩn, virus. Che nắng ngăn tia UV với UPF 40. Cách sử dụng. Mở bao túi đựng sản phẩm, nhẹ nhàng đeo khẩu trang và chỉnh quai tai cho vừa vặn, dùng tay chỉnh thanh nẹp mũi cho vừa khít để đảm bảo hiệu quả lọc bụi. Bảo quản: Nơi khô ráo, thoáng mát. Quy cách đóng gói: 5 cái/gói. Thương hiệu: Jomi. Sản xuất tại: Công ty TNHH VPC Việt Nam. Công ty chịu trách nhiệm về sản phẩm: Công ty TNHH VPC Việt Nam. Công ty phân phối: Công ty CP Dược mỹ phẩm Việt Nam. Số giấy công bố: GCNHQ 1472101200."
        },
        {
            id: 9,
            imgSrc: "https://data-service.pharmacity.io/pmc-upload-media/production/pmc-ecm-core/__sized__/products/P08241_3-thumbnail-510x510-70.jpg",
            alt: "post",
            category: "Khẩu trang y tế",
            categoryName: "Chăm sóc sức khỏe",
            name: "Khẩu trang siêu bảo vệ Unicharm 3D Mask High Block (Gói 5 miếng)",
            price: 28000,
            info: "Khẩu trang siêu bảo vệ Unicharm 3D Mask High Block với cấu trúc lọc đa lớp giúp ngăn khói bụi, phấn hóa. Độc đáo với thiết kế 3D thông minh ôm vừa vặn khuôn mặt, cho cảm giác thoải mái, dễ chịu và không gây bí thở.",
            description: "Thành phần: Polyester, Polyolefin, lớp lọc. Công dụng: Ngăn chặn các vi-rút gây bệnh, ngăn khói bụi, phấn hoa gây dị ứng. Cách sử dụng: Mở rộng khẩu trang từ vị trí mũi tên, lần lượt đeo hai quai vào vành tai, điều chỉnh cho vừa vặn. Bảo quản: Nơi khô ráo thoáng mát, sạch sẽ, tránh ánh nắng và nhiệt độ cao.",
            subImg: ""
            // addDescription: "Xuất xứ thương hiệu: Nhật Bản. Sản xuất tại: Nhật Bản. *Cam kết chỉ bán sản phẩm còn dài hạn sử dụng."
        },
        {
            id: 10,
            imgSrc: "https://data-service.pharmacity.io/pmc-upload-media/production/pmc-ecm-core/__sized__/products/P22015_1N-thumbnail-510x510-70.jpg",
            alt: "post",
            category: "Khẩu trang y tế",
            categoryName: "Chăm sóc sức khỏe",
            name: "Khẩu trang Niva N95 (10 cái/hộp)",
            price: 51700,
            info: "Khẩu trang Niva 95 được tạo bởi 2 lớp vải không dệt cao cấp không thấm nước, bụi, dầu, giọt bắn, 1 lớp vải bông không dệt và 1 lớp màng lọc, sản phẩm giúp ngăn vi khuẩn, khói, bụi, dầu, giọt bắn, phòng các dịch bệnh nguy hiểm lây qua đường hô hấp.",
            description: "Thành phần. Khẩu trang NIVA 95 được tạo bởi 2 lớp vải không dệt cao cấp không thấm nước, bụi, dầu, giọt bắn, 1 lớp vải bông không dệt và 1 lớp màng lọc. Màu sắc: Trắng. Công dụng. Ngăn vi khuẩn, khói, bụi, dầu, giọt bắn, phòng các dịch bệnh nguy hiểm lây qua đường hô hấp. Cách sử dụng.",
            subImg: "https://data-service.pharmacity.io/pmc-upload-media/production/pmc-ecm-core/products/P22015_3.jpg"
            // addDescription: "Cầm khẩu trang, mặt có màu hướng ra ngoài. Hai tay cầm hai sợi thun của khẩu trang, áp sát khẩu trang vào mặt và đeo thun vào hai bên tai. Một tay kéo phần trên khẩu trang có thanh nẹp mũi, thao tác làm sao để khẩu trang có thể áp sát vào đường sống mũi và che kín toàn bộ phần cằm. Bảo quản: Nơi khô ráo, thoáng mát. Quy cách đóng gói: 10 cái/hộp. Thương hiệu: Niva. Sản xuất tại: Diligo Holdings, Việt Nam. Số giấy công bố: TCCS 01:2020/Diligo Holdings.,jsc."
        },
        {
            id: 11,
            imgSrc: "https://data-service.pharmacity.io/pmc-upload-media/production/pmc-ecm-core/__sized__/products/P07218_1_l-thumbnail-510x510.webp",
            alt: "post",
            category: "Chống muỗi",
            categoryName: "Chăm sóc sức khỏe",
            name: "Kem chống muỗi hương cam Soffell (Chai 60ml)",
            price: 23000, 
            info:  "Sử dụng kem chống muỗi hương cam Soffell làm cho muỗi tránh xa bạn trong suốt thời gian 10 giờ mà vẫn giữ cho làn da mềm mại, lưu hương cam nhẹ nhàng dễ chịu.",
            description: "Thành phần. Diethyltoluamide 13%. Công dụng. Sử dụng Soffell làm cho muỗi tránh xa bạn trong suốt thời gian 10 giờ mà vẫn giữ cho làn da mềm mại. Cách sử dụng: Thoa đều lên những vùng da hở như cổ, tay, chân hoặc quần áo, chăn màn. Soffell duy trì hiệu quả xua muỗi trong vòng 10 giờ.",
            subImg: ""
            // addDescription: "Bảo quản: Nơi khô ráo thoáng mát, tránh ánh nắng trực trực tiếp. Dung tích: 60ml. Xuất xứ thương hiệu: Indonesia. Sản xuất tại: Indonesia. *Cam kết chỉ bán sản phẩm còn dài hạn sử dụng."
        },
        {
            id: 12,
            imgSrc: "https://data-service.pharmacity.io/pmc-upload-media/production/pmc-ecm-core/products/P13180_1_l.webp",
            alt: "post",
            category: "Chống muỗi",
            categoryName: "Chăm sóc sức khỏe",
            name: "Sản phẩm chống muỗi dạng kem hương Lavender Mentholatum Remos (70g)",
            price: 21250,
            info: "Sản phẩm chống muỗi dạng kem hương Lavender Mentholatum Remos với công thức chống muỗi độc đáo, chứa Diethyltoluamide hiệu quả và an toàn trong việc xua muỗi.",
            description: "Thành phần. Diethyltoluamide 15%. Công dụng. Chống muỗi hiệu quả trong 10 giờ. Dạng kem không nhờn rít. Hương oải hương dịu nhẹ, thoải mái. Aloe Vera và Vitamin E giúp da mềm mại và mịn màng hơn.",
            subImg: "https://data-service.pharmacity.io/pmc-upload-media/production/pmc-ecm-core/products/P13180_3_l.webp",
            // addDescription: "Đối tượng sử dụng. Dùng cho người lớn và trẻ trên 4 tuổi. Cách sử dụng. Lấy một lượng kem thích hợp ra lòng bàn tay và thoa đều lên vùng da hở như cổ, mặt, tay, chân. Bảo quản: Đậy chặt nắp sau khi sử dụng. Để nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp. Đóng gói: 70g. Xuất xứ thương hiệu: Nhật Bản. Sản xuất bởi: Công ty TNHH Rohto-Mentholatum Việt Nam. Địa chỉ: 16 VSIP đường số 5 Khu công nghiệp Việt Nam - Singapore, P. Bình Hòa, Thành phố Thuận An, Tỉnh Bình Dương. Điện thoại: 08-36229322. Chịu trách nhiệm đưa sản phẩm ra thị trường. Công ty TNHH Rohto-Mentholatum Việt Nam. Địa chỉ: 16 VSIP đường số 5 Khu công nghiệp Việt Nam - Singapore, P. Bình Hòa, Thành phố Thuận An, Tỉnh Bình Dương. Điện thoại: 08-36229322. Số giấy XNQC: 04/2018/XNQC/MTYT"
        },
        {
            id: 13,
            imgSrc: "https://data-service.pharmacity.io/pmc-upload-media/production/pmc-ecm-core/products/P16089_1_l.webp",
            alt: "post",
            category: "Dầu tràm, dầu xoa bóp",
            categoryName: "Chăm sóc sức khỏe",
            name: "Dầu mù u Thái Dương (10ml)",
            price: 46000,
            info: "Dầu mù u Thái Dương chiết xuất mù u hỗ trợ chữa lành vết thương ngoài da như vết bỏng, vết thương hở, côn trùng cắn…, hỗ trợ các bệnh về da, giúp giảm đau thần kinh tọa và các bệnh lý thấp khớp...",
            description: "Thành phần. Chiết xuất: Hạt mù u ép lạnh. Trong dầu mù u có chứa 3 acid béo quan trọng như acid linoleic, acid stearic, acid palmitic; acid oleic, ngoài ra còn chứa các nhóm hoạt chất có hoạt tính sinh học như calophylloid, inophylloid… Màu sắc: Xanh đen đến nâu. Công dụng. Hỗ trợ chữa lành vết thương ngoài da như vết bỏng, vết thương hở, côn trùng cắn… Hỗ trợ các bệnh về da như mụn trứng cá, mụn rộp, lở loét, chàm, vẩy nến, hăm tã… Cải thiện và nuôi dưỡng làn da khỏe mạnh, ngăn ngừa lão hóa.",
            subImg: "",
            // addDescription: "Ngăn ngừa lão hóa và chống nắng. Giảm đau thần kinh tọa và các bệnh lý thấp khớp. Cách dùng. Dùng trực tiếp trên da bằng cách chấm dầu mù u đất việt vào vùng sưng tấy, mụn nhọt, chân răng … làm giảm đau nhức, sát khuẩn, chống nhiễm trùng, kích thích lên da non… Dùng riêng hoặc kết hợp dầu mù u massage với tinh dầu nghệ khi thoa trực tiếp trên da giúp làm đẹp da và sáng da, chống nắng, giảm thâm nám và làm mờ sẹo. Khi bị bỏng bô xe máy, bị phỏng do làm việc tiếp xúc với lửa, bị trày xước nặng do té xe,... lúc này bạn sử dụng một ít dầu mù u vào các vết thương sau 1 - 2 ngày vết thương sẽ dịu và lành hẳn không để lại sẹo. Khi mọi vết thương có dấu hiệu suy giảm thì tiếp tục sử dụng dầu mù u dưỡng da giúp loại bỏ các yếu tố gây hại cho da giúp da không còn sẹo, mụn, thâm, vết nám,... Bảo quản: Bảo quản nơi khô ráo, tránh ánh nắng trực tiếp. Đậy kín sau khi dùng. Tránh xa tầm tay trẻ em. Quy cách đóng gói: Hộp 1 chai thủy tinh có ống nhỏ giọt 10ml. Xuất xứ thương hiệu: Việt Nam. Sản xuất tại: Việt Nam."
        },
        {
            id: 14,
            imgSrc: "https://data-service.pharmacity.io/pmc-upload-media/production/pmc-ecm-core/products/P16091_1.jpg",
            alt: "post",
            category: "Dầu tràm, dầu xoa bóp",
            categoryName: "Chăm sóc sức khỏe",
            name: "Dầu tràm Con Yêu (100ml)",
            price: 225000,
            info: "Dầu tràm Con Yêu được chiết xuất 100% từ lá tràm giúp phòng chống cảm lạnh, trúng gió, hỗ trợ giảm các cơn đau ở khớp tay và chân. Ngoài ra, sản phẩm còn hiệu quả trong việc làm dịu các vết ngứa, côn trùng cắn, sử dụng trong để tắm cho bé yêu nhằm giữ ẩm và kháng khuẩn.",
            description: "Thành phần: 100% tinh dầu tràm. Công dụng: Phòng chống cảm lạnh, trúng gió. Tắm cho bé nhằm giữ ấm, kháng khuẩn được tốt hơn. Hỗ trợ giảm các cơn đau ở khớp tay, chân. Làm dịu các vết cắn của côn trùng. Hướng dẫn sử dụng: Thoa gan bàn chân, bàn tay để giữ ấm cho cơ thể, xông phòng để giữ cho không khí khô thoáng, trong sạch.",
            subImg: "https://data-service.pharmacity.io/pmc-upload-media/production/pmc-ecm-core/products/P16091_2.jpg",
            // addDescription: "Xông, hít, ngửi dầu vào vùng mũi họng để giảm ho khè, nghẹt mũi. Bôi trực tiếp lên vết muỗi hay côn trùng cắn. Bảo quản: Nơi khô ráo, tránh ánh nắng trực tiếp. Quy cách đóng gói: Hộp 1 chai 100ml. Xuất xứ thương hiệu: Việt Nam. Sản xuất tại: Việt Nam. *Cam kết chỉ bán sản phẩm còn dài hạn sử dụng."
        },
        {
            id: 15,
            imgSrc: "https://data-service.pharmacity.io/pmc-upload-media/production/pmc-ecm-core/products/P21654_11.jpg",
            alt: "post",
            category: "Nhiệt kế",
            categoryName: "Thiết bị y tế",
            name: "Nhiệt kế hồng ngoại Kachi JXB-315",
            price: 711000,
            info: "Nhiệt kế hồng ngoại Kachi JXB-315 với thiết kế đặc biệt để giúp đo nhiệt độ cơ thể con người với khoảng cách 0 ~ 3cm nên có thể ứng dụng trong rất nhiều lĩnh vực của đời sống. Sản phẩm rấthữu ích khi đo nhiệt độ tại những vị trí nguy hiểm: chứa chất độc hại, điều kiện khắc nghiệt, thiết bị điện…",
            description: "Công dụng. - Nhiệt kế điện tử hồng ngoại Kachi JXB-315 là sản phẩm vô cùng cấn thiết của mỗi gia đình, không gây ồn, nên nếu đối tượng sử dụng đo là trẻ nhỏ, nhiệt kế sẽ không làm ảnh hưởng đến giấc ngủ của trẻ. Đặc biệt, trong thời điểm dịch bệnh, giúp kiểm tra nhanh các trường hợp nhiệt độ cao, giảm nguy cơ dịch lan rộng tối đa. Là một chiếc nhiệt kế cực kỳ thông minh, nhờ cảm biến cực nhạy được trang bị ngay trên sản phẩm với độ chính xác cực cao, tốc độ cho kết quả cực kỳ nhanh chỉ từ 1 đến 2 giây. - Không cần sự tiếp xúc giữa vật cần đo và nhiệt kế nên có thể ứng dụng trong rất nhiều lĩnh vực của đời sống.- Có thể đo nhiệt độ của những vật có kích thước lớn.",
            subImg: "https://data-service.pharmacity.io/pmc-upload-media/production/pmc-ecm-core/products/P21654_1.jpg",
            // addDescription: "- Rất hữu ích khi đo nhiệt độ tại những vị trí nguy hiểm: chứa chất độc hại, điều kiện khắc nghiệt, thiết bị điện… - Máy đo nhiệt kế Kachi JXB-315 cảm biến hồng ngoại còn được thiết kế góc 15.5 độ vốn được xem là góc đo lý tưởng nhất để đem lại hiệu quả cao nhất. Bạn hoàn toàn không cần đặt nhiệt kế chạm vào cơ thể mà vẫn thu được kết quả đo chính xác đến từng con số. Đặc điểm nổi bật. - Thiết kế đặc biệt để giúp đo nhiệt độ cơ thể con người với khoảng cách 0 ~ 3cm (0 ~ 1,2 in) từ thái dương. - Đo lường ổn định và chính xác, nhờ vào Hệ thống cảm biến nhiệt độ hồng ngoại. - Báo động nếu nhiệt độ lớn hơn 38°C (100,4°F). - Bộ nhớ lưu trữ lên đến 32 lần các phép đo nhiệt độ gần nhất. - Màn hình kỹ thuật số LED màu sắc. - Đơn vị nhiệt độ có thể được hiển thị bằng độ C hoặc độ F. - Tắt nguồn tự động (<30 giây) để tiết kiệm năng lượng. - Sử dụng lâu dài (100.000 lần). Thông số kĩ thuật. - Trọng lượng sản phẩm: 66gram. - Trọng lượng đóng hộp: 120gram. - Kích thước sản phẩm: 14.5 x 4 x 3.2cm. - Kích thước đóng hộp: 17.3 x 7.5 x 4.5cm. - Công nghệ: Cảm biến hồng ngoại. - Điện áp: DC 3V (2 pin AAA). - Màu sắc: Trắng. - Chất liệu phía ngoài: Nhựa ABS. - Sử dụng pin hay điện? Pin. - Lưu ý loại pin/ nguồn điện: 2 pin AAA. - Có kèm pin/ không kèm pin: Không. Hướng dẫn sử dụng: Sử dụng rất dễ dàng, bạn chỉ cần hướng về vật cần đo sau đó bấm nút và đọc kết quả trên màn hình. Lưu ý khi sử dụng: - Đối với lần sử dụng đầu tiên sau khi lắp pin, cần đợi khoảng 10 - 15 phút để nhiệt kế ấm lên bằng nhiệt độ phòng. - Nhiệt kế hồng ngoại cần được bảo quản nhiệt kế ở nơi khô ráo, thoáng mát, tránh để nhiệt kế ở những nơi có nhiệt độ cao hoặc ẩm ướt. - Trong quá trình sử dụng, tránh làm va đập hay giẫm đạp lên nhiệt kế hồng ngoại. - Những vùng cần đo (ví dụ trán, tai) cần được vệ sinh sạch sẽ, không bị ướt. Ngoài ra, để đảm bảo an toàn, nên tránh để nhiệt kế hồng ngoại chiếu trực tiếp vào mắt. - Để có được kết quả chính xác nhất, không nên đo nhiệt độ trong một khoảng cách quá xa và cần thực hiện theo hướng dẫn sử dụng và khuyến cáo của nhà sản xuất. - Không nên sử dụng liên tục với thời gian sát nhau bởi vì lúc này nhiệt kế chưa kịp trở về trạng thái bình thường sau lần đo trước đó. Khoảng thời gian cách nhau sau mỗi lần sử dụng nhiệt kế tốt nhất nên là từ 2 đến 3 phút. Hạn sử dụng: 5 năm. Xuất xứ thương hiệu: Trung Quốc. Bảo hành: 24 tháng. Hotline bảo hành: 19001738."
        },
        {
            id: 16,
            imgSrc: "https://data-service.pharmacity.io/pmc-upload-media/production/pmc-ecm-core/products/P08457_1_l.webp",
            alt: "post",
            category: "Nhiệt kế",
            categoryName: "Thiết bị y tế",
            name: "Nhiệt kế điện tử Microlife MT500",
            price: 125000,
            info: "Nhiệt kế điện tử Microlife MT500 là dòng sản phẩm nhiệt kế điện tử cung cấp giải pháp thay thế cho nhiệt kế thủy ngân do tính an toàn trong sử dụng, có độ chính xác cao, đo nhanh cho kết quả chỉ sau 30 giây.",
            description: "Công dụng. Đo thân nhiệt cơ thể. Thông tin kỹ thuật. Đo thân nhiệt bằng công nghệ cảm ứng mạ vàng, cho kết quả nhanh và chính xác trong 30 giây. Đầu dẻo, chống thấm nước. Báo tiếng bíp sau khi đo. Sai số chỉ 0,2 độ C. Sử dụng pin hay điện? Pin. Lưu ý loại pin/ nguồn điện: Pin CR1632.",
            subImg: "https://data-service.pharmacity.io/pmc-upload-media/production/pmc-ecm-core/products/P08457_5.jpg",
            // addDescription: "Có kèm pin/ không kèm pin: Có. Cách sử dụng. Đọc kỹ tờ hướng dẫn sử dụng có trong hộp. Lưu ý. - Để đảm bảo sự chính xác cho kết quả đo, nhiệt kế và người/ vật cần đo phải ở cùng một phòng trong ít nhất 30 phút trước khi đo. - Không sử dụng nhiệt kế trong môi trường có độ ẩm cao. - Không hướng nhiệt kế ra khỏi vùng đo trước khi nghe tiếng “bíp"" báo hiệu đã đo xong." Bảo quản. 10 độ C tới 40 độ C, 15 – 95% độ ẩm tương đối tối đa. Xuất xứ thương hiệu: Thụy Sĩ. Sản xuất tại: Trung Quốc. Hạn sử dụng: 5 năm hoặc 10.000 lần đo. Bảo hành: Trọn đời. Hotline bảo hành: 02862775538."
        },
        {
            id: 17,
            imgSrc: "https://data-service.pharmacity.io/pmc-upload-media/production/pmc-ecm-core/products/P09292_1_l.webp",
            alt: "post",
            category: "Máy đo huyết áp",
            categoryName: "Thiết bị y tế",
            name: "Máy đo huyết áp bắp tay tự động Microlife BP 3NZ1-1P, hỗ trợ tầm soát nhịp tim",
            price: 8800000,
            info: "Máy đo huyết áp bắp tay tự động Microlife BP 3NZ1-1P là thiết bị đo huyết áp thế hệ mới của Microlife được tích hợp công nghệ đo PAD, AFIB và MAM giúp đưa ra kết quả chính xác và tin cậy, cảnh báo sớm về chứng tăng huyết áp và rung nhĩ, hai nguyên nhân chính dẫn đến đột quỵ não.",
            description: "Thông số kỹ thuật. - Trọng lượng: 319 g (bao gồm pin). - Kích thước: 146 x 65 x 46 mm. - Phương pháp đo: Đo dao động. - Tầm đo: Huyết áp: 20 - 280 mmHg. - Nhịp tim: 40 - 200 nhịp/phút.",
            subImg: "https://data-service.pharmacity.io/pmc-upload-media/production/pmc-ecm-core/products/P09292_2_l.webp",
            // addDescription: "- Nguồn điện: 4 viên pin alkaline AA. Ưu điểm nổi bật. - Máy đo huyết áp hoàn toàn tự động. - Công nghệ PAD phát hiện rối loạn nhịp tim. - Bộ nhớ 1 lần sử dụng gần nhất. - Màn hình hiển thị lớn. Thành phần. - Máy đo huyết áp bắp tay Microlife BP 3NZ1-1P. - Túi hơi size M-L (22-42cm). - 4 pin AA. - Túi đựng máy. - Hướng dẫn sử dụng. Công dụng. - Sản phẩm được dùng để đo huyết áp tâm thu, huyết áp tâm trương và nhịp tim. Cách sử dụng. - Nhấn nút ON/OFF (1) đế bắt đầu đo. - Túi hơi bây giờ sẽ tự động bơm lên. Hãy thư giãn, không cử động và không căng thẳng cơ bắp cánh tay cho đến khi kết quả đo được hiển thị. Thở bình thường và không nói chuyện. - Khi đạt được áp suất thích hợp, quá trình bơm dừng lại và áp suất giảm dần. Nếu áp suất cần thiết không đạt được, thiết bị sẽ tự động bơm thêm không khí vào túi hơi. - Trong khi đo, biểu tượng nhịp tim (12) nhấp nháy trên màn hình. - Kết quả bao gồm chỉ số huyết áp tâm thu (8), huyết áp tâm trương (9) và nhịp tim mỗi phút (10) được hiển thị khi quá trình đo được hoàn tất. Lưu ý các chỉ số khác và báo lỗi. - Khi thiết bị đã đo xong, tháo túi hơi ra khỏi cánh tay. - Tắt thiết bị (thiết bị sẽ tự động tắt sau khoảng 1 phút không có thao tác). - Bạn có thể dừng đo bất cứ lúc nào bằng cách nhấn nút ON/OFF (ví dụ khi bạn thấy khó chịu vì áp suất túi hơi). Lưu ý. Tránh cử động, ăn uống hoặc hút thuốc ngay trước khi đo. Ngồi nghỉ trong ít nhất 5 phút trước khi đo và thư giãn. Luôn đo ở cùng một cánh tay (thông thường là tay bên trái). Chúng tôi đề nghị bác sĩ đo ở cả hai tay bệnh nhân trong lần khám đầu tiên để xác định tay cần đo trong các lần khám kế tiếp. Tay có kết quả đo cao hơn sẽ được đo trong các lần sau. Loại bỏ các phục sức bó sát từ bắp tay trở đi. Để tránh sự có thắt, tay áo sơ mi không nên được cuộn lại mà phải kéo phẳng ra. Luôn luôn đảm bảo rằng bạn sử dụng túi hơi đúng kích thước và đeo túi hơi đúng cách (theo minh họa ngay trên túi hơi). Lắp túi hơi vừa khít với bắp tay, nhưng không quá chật. Hãy chắc chắn rằng túi hơi được đặt 2 cm phía trên khuỷu tay và ống hơi nằm ở mặt trong bắp tay. Dấu chỉ động mạch nằm trên túi hơi (thanh dài 3cm) phải nằm ngay trên động mạch trên bắp tay. Tạo tư thế thoải mái cho cánh tay. Chắc chắn rằng túi hơi ở ngang độ cao với tim của bạn. Hạn sử dụng: Lâu dài. Bảo quản: Nơi khô ráo, thoáng mát. Bảo hành. Thân máy được bảo hành 5 năm, túi hơi được bảo hành 2 năm kể từ ngày mua. Quy định này chỉ có giá trị khi có thẻ bảo hành do đại lý ủy quyền cung cấp, trên đó có ghi đầy đủ thông tin về ngày mua máy. Pin và các phụ kiện khác không nằm trong danh mục được bảo hành. Chúng tôi từ chối bảo hành nếu có dấu hiệu bị mở ra. Bảo hành này không áp dụng cho các trường hợp bị hỏng do thao tác sai, rò rỉ pin; các trường hợp không tuân theo chỉ dẫn về vận hành hay những thay đổi do bên thứ ba gây ra. Vui lòng liên hệ với Trung tâm bảo hành Microlife theo thông tin trên Phiếu bảo hành hoặc tại website https://microlife.com.vn/ Thương hiệu: MICROLIFE. Nơi sản xuất: TRUNG QUỐC. Tên Nhà sản xuất: Microlife Corporation. Công ty chịu trách nhiệm về SP: BIOMEQ - Công Ty Cổ Phần Thiết Bị Y Sinh. Công ty phân phối: BIOMEQ - Công Ty Cổ Phần Thiết Bị Y Sinh."
        },
        {
            id: 18,
            imgSrc: "https://data-service.pharmacity.io/pmc-upload-media/production/pmc-ecm-core/products/P22040_1_l.webp",
            alt: "post",
            category: "Máy đo huyết áp",
            categoryName: "Thiết bị y tế",
            name: "Máy đo huyết áp cổ tay điện tử CK-W132",
            price: 350000,
            info: "Máy đo huyết áp cổ tay điện tử CK-W132 sử dụng để đo huyết áp, nhịp tim ở người lớn. Máy hoạt động dựa trên phương pháp dao động của đo huyết áp. Máy được thiết kế nhỏ gọn, dây đeo tay gắn liền với thân máy và kèm màn hình LCD rất tiện lợi.",
            description: "Công dụng. Sử dụng để đo huyết áp, nhịp tim ở người lớn. Thông số kĩ thuật. Hiển thị: Màn hình kĩ thuật số LCD. Phương pháp đo: Quét xung/Phương pháp xác định dao động. Dải đo: Huyết áp (0-299) mmHg, nhịp tim (40-199) nhịp/giây. Độ chính xác: Huyết áp ±3mmHg, nhịp tim ± 5% của kết quả đo được. Dung lượng bộ nhớ: 90 lần đo. Cảm ứng áp suất: Cảm biến áp xuất bán dẫn.",
            subImg: "",
            // addDescription: "Nguồn điện: Pin kiềm Số 7 3V, kiểu BF. Nhiệt độ và độ ẩm hoạt động: +10ºC ∼ +40ºC, 30% ∼ 85% R.H. Trọng lượng máy: 128g hoặc hơn. Phạm vi đo của dây đeo cổ tay: Chu vi cổ tay là 135-195mm hoặc lớn hơn. Kích thước máy: 70mm (L) x 65.8mm (W) x 27mm (H). Tư thế đo đúng. Trong quá trình đo, xin vui lòng ngồi, giữ im lặng và thả lỏng cơ thể. Dây đeo cổ tay nên được giữ ngang tầm với tim. Lưu ý. Hãy đo huyết áp mỗi ngày vào cùng thời điểm, sử dụng cùng một cánh tay, cùng một tư thế. Khuyến khích đo sau khi thức dậy một giờ, trước khi đi ngủ vào buổi tối. Sự khác biệt về vị trí của cổ tay khi đo sẽ dẫn đến sự chênh lệch của giá trị đo. Không chạm vào thiết bị chính và dây đeo cổ tay trong khi đo. Vui lòng giữ yên lặng và thả lỏng cơ thể trong quá trình đo. Giữ yên 5 phút trước khi đo. Thả lỏng cơ thể, cổ tay và ngón tay. Không nói chuyện trong lúc đo. Khoảng cách mỗi lần đo nên cách nhau khoảng 4 - 5 phút. Thành phần sản phẩm. Sản phẩm bao gồm thiết bị chính (Thiết bị chính gồm: Màn hình, thanh cảnh báo, khoang chứa pin, dây đeo cổ tay, nút bộ nhớ, nút bắt đầu, nút cài đặt) và dây đeo tay. Sản phẩm khi bán không kèm pin. Hướng dẫn sử dụng. 1. Nhấn START/STOP, bộ sạc dây đeo tay tự động, bắt đầu đo. 2. Kết thúc đo, giá trị huyết áp, giá trị nhịp tim sẽ được hiển thị trên màn hình. (Không khí trong dây đeo cổ tay sẽ tự động mất đi, đơn vị đo kết quả là 'mmHg', đơn vị của giá trị nhịp tim là 'lần/s'). 3. Nhấn phím START/STOP, màn hình tắt. (Nếu quên tắt màn hình, màn hình sẽ tự động tắt sau 3 phút). Lưu ý. Nếu trên màn hình hiển thị 'Err', phép đo không thể tiếp tục. Vui lòng làm theo trang 'Thông báo lỗi và Khắc phục sự cố'. Nếu cổ tay xuất hiện sự nghẽn mạch sau khi đo liên tục, nó sẽ không đạt được giá trị huyết áp phù hợp, vui lòng để mạch máu trở lại trạng thái bình thường trước khi tiến hành đo lại. Bảo quản và bảo trì. Đặt máy đo huyết áp trong hộp đựng sau khi bạn đo xong. Không kéo thẳng dây đeo cổ tay và va chạm mạnh vào máy. Vui lòng không để dưới ánh nắng mặt trời, nhiệt độ cao, bụi hoặc khí ăn mòn, cũng không thể hoạt động máy trong môi trường như vậy. Vui lòng sử dụng vải sạch và mềm để lau nhẹ, sau đó lau khô ngay lập tức. Không sử dụng quá nhiều nước để rửa máy, làm ẩm máy và dây đeo cổ tay. Không sử dụng chất dễ bay hơi, dung môi và cồn để làm sạch máy. Vui lòng sạc pin hàng tháng. Xuất xứ: Trung Quốc. Bảo hành: 1 năm. Nhà sản xuất: SHENZHEN CHANGKUN TECHNOLOGY CO., LTD - 201, Floor 1 & 3-8, Building B, 69, Zhenbi Road, Billing Community, Billing Subdistrict, Pingshan District,Shenzhen City, Guangdong Province, 518118, Trung Quốc. Nhập khẩu & Phân phối & Bảo hành: CÔNG TY CỔ PHẦN DƯỢC PHẨM PHARMACITY. 248A Nơ Trang Long, P.12, Q. Bình Thạnh, TP. Hồ Chí Minh, Việt Nam."
        },
        {
            id: 19,
            imgSrc: "https://data-service.pharmacity.io/pmc-upload-media/production/pmc-ecm-core/products/P26063_1.jpg",
            alt: "post",
            category: "Máy đo đường huyết",
            categoryName: "Thiết bị y tế",
            name: "Hộp que thử Contour Plus (2x25 Que)",
            price: 377000,
            info: "",
            description: "Công dụng. Kết quả chính xác. Tiết kiệm que thử. Trả kết quả sau 5 giây. Đặc điểm nổi bật. Chỉ cần một mẩu máu nhỏ: Que thử được thiết kế để dễ dàng trích lấy máu vào đầu mẫu thử. Chỉ cần mẫu máu nhỏ 0,6 μL. Kết quả nhanh: Sử dụng que thử trước thời hạn sử dụng. Nhận kết quả sau 5 giây. Tiết kiệm que thử: Khả năng lấy mẫu Second-Chance cho phép bạn lấy thêm máu khi lượng máu lúc đầu không đủ để xét nghiệm.",
            subImg: "https://data-service.pharmacity.io/pmc-upload-media/production/pmc-ecm-core/products/P26063_2.jpg",
            // addDescription: "Lưu ý: Sử dụng với máy đo đường huyết CONTOUR®PLUS ONE và CONTOUR®PLUS. Xuất xứ: Nhật Bản. Sản xuất: PHC Corporation, In Vitro Diagnostics Division, 2131-1 Minamigata, Toon, Ehime, 791-0395, Japan. Hạn sử dụng: 2 năm."
        },
        {
            id: 20,
            imgSrc: "https://data-service.pharmacity.io/pmc-upload-media/production/pmc-ecm-core/products/P09468_1_l.webp",
            alt: "post",
            category: "Máy đo đường huyết",
            categoryName: "Thiết bị y tế",
            name: "Kim chích máu 28G Linkfar (Hộp 100 cái)",
            price: 50000,
            info: "Kim chích máu 28G Linkfar dùng lấy mẫu máu ở đầu ngón tay, hỗ trợ đo đường huyết. Sản phẩm đã qua tiệt trùng, được vát tam giác, hạn chế tối đa cảm giác khó chịu khi lấy máu. Kim chích máu 28G Linkfar tương thích với nhiều loại bút lấy máu trên thị trường.",
            description: "Thành phần. Hộp 100 kim đóng gói trong bao tiệt trùng. Công dụng. Kim chích lấy máu bệnh nhân. Đặc tính kĩ thuật. Đầu kim được vát tam giác hạn chế tối đa cảm giác khó chịu. Tương thích các loại bút lấy máu trên thị trường. Hướng dẫn sử dụng.",
            subImg: "https://data-service.pharmacity.io/pmc-upload-media/production/pmc-ecm-core/products/P09468_2_l.webp",
            // addDescription: "1. Rửa sạch tay với xà phòng và nước ấm. Để khô tay. 2. Dùng đầu ngón tay xoay nhẹ nắp bảo vệ. 3. Gỡ nắp bảo vệ ra khỏi kim. 4. Đặt kim vào bút lấy máu và chích qua da. 5. Tiếp máu vào que thử, lau máu thừa ở đầu ngón tay. 6. Vứt kim đã sử dụng vào nơi thích hợp. Lưu ý:  Không tái sử dụng kim chích máu. Không trữ kim ở bút lấy máu. Đóng gói: Hộp 100 kim, đóng gói trong bao tiệt trùng. Xuất xứ thương hiệu: Trung Quốc. Sản xuất tại: Trung Quốc."
        },
        {
            id: 21,
            imgSrc: "https://data-service.pharmacity.io/pmc-upload-media/production/pmc-ecm-core/products/P12876_1_l.webp",
            alt: "post",
            category: "Máy xông khí dung",
            categoryName: "Thiết bị y tế",
            name: "Máy xông khí dung Microlife NEB200 hỗ trợ các bệnh viêm mũi, viêm xoang",
            price: 1050000,
            info: "Máy xông mũi họng Microlife NEB 200 với cải tiến về mặt công nghệ giúp cho người sử dụng dễ dàng hơn trong quá trình phòng ngừa bệnh liên quan đến đường hô hấp. Với thiết kế nhỏ gọn, đẹp mắt, được làm từ chất liệu cao cấp, dễ dàng vận hành và sử dụng, NEB 200 đang dần trở thành giải pháp tối ưu trong quá trình phòng ngừa bệnh.",
            description: "Thành phần. - Máy xông khí dung Microlife NEB200. - Phụ kiện máy đầy đủ bao gồm: 2 mask (người lớn và trẻ em), 1 cốc đựng thuốc, 1 càng xông họng, 1 càng xông mũi, 3 miếng lọc khí, dây dẫn khí, sách hướng dẫn sử dụng, phiếu bảo hành sản phẩm. Công dụng: Sản phẩm được dùng để phòng và điều trị bệnh liên quan đến đường hô hấp. Thông tin kỹ thuật.",
            subImg: "https://data-service.pharmacity.io/pmc-upload-media/production/pmc-ecm-core/products/P12876_2_l.webp",
            // addDescription: "- Tốc độ xông: 0,4ml/phút (NaCI 0,9%). - Kích thước hạt: 71,2% < 5um. 3,16um (MMAD). - Lưu lượng khí tối đa: 15l/phút. - Lưu lượng khí nén: 5,31l/phút. - Độ ồn: 52 dBA. - Thể tích thuốc xông: tối thiểu 2ml – tối đa 8ml. - Thể tích thuốc còn sót: 0,8ml. - Giới hạn hoạt động: 30p hoạt động/ 30p ngừng. - Khối lượng: 1300g. - Kích thước: 92x160x140 mm. Ưu điểm nổi bật. Thiết kế máy sang trọng, tiện lợi, phù hợp cho cả cá nhân, phòng khám, bệnh viện. - NEB 200 là sản phẩm của Microlife – một trong những thương hiệu nổi tiếng đến từ Thụy Sỹ. - Sản phẩm có thiết kế đẹp mắt, hiện đại, kiểu dáng sang trọng, chắc chắn, cao cấp hơn hẳn so với các dòng máy xông bên ngoài thị trường. - Sản phẩm sử dụng được cho cả người lớn và trẻ em. - Hạt phun nhỏ mịn (71,2% < 5um – 3,16um (MMAD)) giúp cơ thể hấp thu thuốc một cách tốt nhất, hiệu quả nhất. - Máy có công suất lớn hơn so với các dòng sản phẩm khác vì vậy áp lực phun mạnh hơn, với việc sử dụng chế độ theo chu kỳ 30p chạy/30p nghỉ sẽ giúp máy hoạt động hiệu quả hơn. - Thiết kế nhỏ gọn, tiện lợi trong quá trình di chuyển. - Độ ồn máy thấp. Cách sử dụng. - Lắp ráp bộ máy phun sương (11). Đảm bảo rằng tất cả các bộ phận đã hoàn thành. - Đổ đầy dung dịch hít vào máy phun sương theo hướng dẫn của bác sĩ. Đảm bảo rằng bạn không vượt quá mức tối đa. - Kết nối máy phun sương qua ống dẫn khí (6) với máy nén (11) và cắm cáp (2) vào ổ điện (230V 50Hz AC). - Để bắt đầu điều trị, đặt nút ON/OFF (3) ở vị trí «l». - Ống xông miệng giúp đưa thuốc đến phổi tốt hơn. - Lựa chọn giữa mặt nạ dành cho người lớn (8) hoặc trẻ em (9) phù hợp, để vừa đủ bao trùm cả mũi và miệng. - Sử dụng các phụ kiện, kể cả ống xông mũi (12) theo chỉ định của bác sĩ. - Trong suốt quá trình xông, ngồi ở tư thế thoải mái với phần trên cơ thể thẳng đứng, không ngồi dựa lưng vào ghế để đề phòng việc dồn ép khí quản của bạn và làm giảm hiệu quả điều trị. Không nằm khi xông. Dừng quá trình xông nếu bạn cảm thấy có gì không ổn. - Sau khi hoàn thành giai đoạn hít thở mà bác sĩ khuyến nghị, chuyển công tắc ON/OFF (3) sang vị trí«O» để tắt thiết bị và rút phích cắm khỏi ổ cắm. - Xả dung dịch còn lại khỏi máy phun sương và làm sạch thiết bị như mô tả trong phần “Làm sạch và Khử trùng”. - Thiết bị này được thiết kế để sử dụng không liên tục trong 30 phút bật/30 phút tắt. Tắt thiết bị sau 30 phút sử dụng và đợi thêm 30 phút trước khi tiếp tục điều trị. Thiết bị không yêu cầu hiệu chuẩn. - Không được phép sửa đổi trên thiết bị. Lưu ý: Đọc kỹ hướng dẫn trước khi sử dụng. Bảo quản: Nơi khô ráo và thoáng mát. Hạn sử dụng: Lâu dài. Bảo hành. Thân máy được bảo hành 5 năm, túi hơi được bảo hành 2 năm kể từ ngày mua. Quy định này chỉ có giá trị khi có thẻ bảo hành do đại lý ủy quyền cung cấp, trên đó có ghi đầy đủ thông tin về ngày mua máy. Pin và các phụ kiện khác không nằm trong danh mục được bảo hành. Chúng tôi từ chối bảo hành nếu có dấu hiệu bị mở ra. Bảo hành này không áp dụng cho các trường hợp bị hỏng do thao tác sai, rò rỉ pin; các trường hợp không tuân theo chỉ dẫn về vận hành hay những thay đổi do bên thứ ba gây ra. Vui lòng liên hệ với Trung tâm bảo hành Microlife theo thông tin trên Phiếu bảo hành hoặc tại website http://microlife.com.vn. Thương hiệu: MICROLIFE. Nơi sản xuất: TRUNG QUỐC. Công ty chịu trách nhiệm về SP: BIOMEQ - Công Ty Cổ Phần Thiết Bị Y Sinh. Công ty phân phối: BIOMEQ - Công Ty Cổ Phần Thiết Bị Y Sinh"
        },
        {
            id: 22,
            imgSrc: "https://data-service.pharmacity.io/pmc-upload-media/production/pmc-ecm-core/products/P25921_2.jpg",
            alt: "post",
            category: "TPCN Nhóm dạ dày",
            categoryName: "Thực phẩm chức năng",
            name: "Men vi sinh hỗ trợ tiêu hóa 6 ENZYMES IP (Hộp 20 ống x 10ml)",
            price: 155000,
            info: "",
            description: "Thành phần. Amylase 1100IU, Protease 320IU, Lactase 290IU, Cellulose 210 IU, Lipase 65IU, L-Lysine HCI 300mg, L-Arginine Aspartat 100mg, Pepsin 50mg, Lactoferrin 5mg, Kẽm gluconat 5mg (tương đương 0,7 mg Kẽm), Immune-path IP (10%) (Vách tế bào vi khuẩn) 2mg, Vitamin B1 5mg, Vitamin PP 2.5mg, Vitamin B2 1mg, Vitamin B6 1mg, Keo ong 0,5mg, Vitamin A 500IU. Phụ liệu: đường, nước tinh khiết vừa đủ 10 ml. Công dụng. Bổ sung enzym tiêu hóa giúp tăng cường tiêu hoá thức ăn, hỗ trợ giảm tình trạng đầy bụng, khó tiêu, biếng ăn, táo bón.",
            subImg: "https://data-service.pharmacity.io/pmc-upload-media/production/pmc-ecm-core/products/P25921_1.jpg",
            // addDescription: "Hỗ trợ tăng cường sức đề kháng cho cơ thể. Cách dùng – liều dùng. Uống cùng bữa ăn (trước hoặc sau ăn trong vòng 30 phút). Trẻ từ 2 - 6 tuổi: uống 10ml/lần x ngày 2 - 3 lần. Trẻ trên 6 tuổi: uống 10ml/lần x ngày 3 lần. Trẻ dưới 2 tuổi tham khảo ý kiến bác sĩ (liều khuyên dùng: Uống 10ml/lần/ngày). Đối tượng sử dụng. Trẻ tiêu hoá kém có biểu hiện biếng ăn, ăn không ngon, khó tiêu, đầy hơi, chướng bụng. Trẻ bị rối loạn tiêu hóa, trẻ có sức đề kháng kém, trẻ mới ốm dậy. Lưu ý. Không sử dụng cho người mẫn cảm với bất kỳ thành phần nào của sản phẩm hoặc theo lời khuyên của bác sĩ chuyên khoa. Bảo quản: Bảo quản ở nơi khô mát, tránh ánh nắng trực tiếp. Để xa tầm tay trẻ em. Quy cách đóng gói: Hộp 20 ống x 10ml. Thương hiệu: Nutri Southern (Việt Nam). Nhà sản xuất: Mediphar USA. Nơi sản xuất: Việt Nam. Sản phẩm này không phải là thuốc và không có tác dụng thay thế thuốc chữa bệnh."
        },
        {
            id: 23,
            imgSrc: "https://data-service.pharmacity.io/pmc-upload-media/production/pmc-ecm-core/products/P26038_1.jpg",
            alt: "post",
            category: "TPCN Nhóm dạ dày",
            categoryName: "Thực phẩm chức năng",
            name: "Viên hỗ trợ giảm viêm loét dạ dày VỊ NGUYÊN (Hộp 90 viên)",
            price: 188000,
            info: "",
            description: "Thành phần. 240 mg Hỗn hợp cao chiết xuất bởi các thảo mộc. (Chi tử 510 mg, Hương phụ 560mg, Huyền hồ 396 mg). Bột ô tặc cốt 235mg. Tinh bột nghệ 28mg. Cao khô cam thảo 34mg. Phụ liệu vừa đủ: Natri benzoate, Talc,…",
            subImg: "https://data-service.pharmacity.io/pmc-upload-media/production/pmc-ecm-core/products/P26038_2.jpg",
            // addDescription: "Công dụng. Hỗ trợ giảm acid dịch vị, giúp bảo vệ niêm mạc dạ dày. Hỗ trợ cải thiện các triệu chứng và giảm nguy cơ viêm loét dạ dày, tá tràng. Đối tượng sử dụng: Người bị viêm loét dạ dày, tá tràng với các biểu hiện đau thượng vị, đầy hơi, khó tiêu, ợ hơi, ợ chua, người bị trào ngược dạ dày. Người có nguy cơ viêm loét dạ dày, tá tràng. Cách sử dụng. Nuốt trọn viên hoặc nhai. Ngày uống 3 lần (trưa, chiều, tối trước khi đi ngủ), mỗi lần 2-3 viên với nước ấm. Có thể sử dụng lượng tăng gấp đôi để tăng hiệu quả. Chống chỉ định. Không sử dụng cho người có mẫn cảm với bất kỳ thành phần nào của sản phẩm. Không dùng cho phụ nữ có thai. Bảo quản: Để nơi khô ráo thoáng mát, tránh ánh nắng. Để xa tầm tay trẻ em. Thương hiệu: TỒN SANH PHARMA. Tên Nhà sản xuất: Chi nhánh II - Công ty TNHH Dược phẩm Sài Gòn tại Bình Dương. Số Giấy Xác nhận nội dung quảng cáo: 1027/2023/XNQC-ATTP. Số Giấy công bố: 9552/2020/ĐKSP. Công ty chịu trách nhiệm về SP: CÔNG TY TNHH DƯỢC PHẨM TỒN SANH. Thực phẩm này không phải là thuốc, không có tác dụng thay thế thuốc chữa bệnh."
        },
        {
            id: 24,
            imgSrc: "https://data-service.pharmacity.io/pmc-upload-media/production/pmc-ecm-core/products/P24909_1.jpg",
            alt: "post",
            category: "TPCN Cho Huyết Áp",
            categoryName: "Thực phẩm chức năng",
            name: "Hỗ trợ giảm cholesterol Blackmores Cholesterol Health (60 viên)",
            price: 705240,
            info: "Viên hỗ trợ giảm cholesterol Blackmores Cholesterol Health xuất xứ từ Úc, chứa thành phần phytosterol và betacarotene tự nhiên, hỗ trợ giảm cholesterol trong máu và giảm nguy cơ bệnh tim mạch cho người lớn tuổi.",
            description: "Công dụng: Hỗ trợ giảm cholesterol trong máu, giảm nguy cơ bệnh tim mạch. Đối tượng sử dụng: Người lớn cần hỗ trợ kiểm soát cholesterol. Thành phần chính: Dầu thực vật Phytosterol esters, betacarotene tự nhiên… Hướng dẫn sử dụng. Người lớn: Uống 1 viên/lần x 2 lần/ngày cùng bữa ăn hoặc theo chỉ dẫn bác sĩ. Trẻ em dưới 12 tuổi: Chỉ sử dụng nếu có chỉ định của bác sĩ.",
            subImg: "https://data-service.pharmacity.io/pmc-upload-media/production/pmc-ecm-core/products/P24909_2.jpg",
            // addDescription: "Lưu ý: Không nên sử dụng khi mang thai hoặc cho con bú. Không khuyến cáo bổ sung quá 3g phytosterol/ngày từ tất cả các nguồn. Sản phẩm không dùng điều trị cholesterol cao, cần tham khảo lời khuyên của bác sĩ. Không dùng cho người mẫn cảm với bất kỳ thành phần nào của sản phẩm. Bảo quản: Dưới 30 độ C, nơi khô ráo, tránh ánh sáng trực tiếp. Đóng gói: Lọ 60 viên. Xuất xứ thương hiệu: Úc. Sản xuất tại: Úc. *Sản phẩm này không phải là thuốc, không có tác dụng thay thế thuốc chữa bệnh."
        },
        {
            id: 25,
            imgSrc: "https://data-service.pharmacity.io/pmc-upload-media/production/pmc-ecm-core/products/P24263_1.jpg",
            alt: "post",
            category: "TPCN Cho Huyết Áp",
            categoryName: "Thực phẩm chức năng",
            name: "Thực phẩm bảo vệ sức khỏe tinh dầu tỏi hỗ trợ tăng cường đề kháng Costar Garlic Oil (Lọ 60 viên)",
            price: 190900,
            info: "Thực phẩm bảo vệ sức khỏe tinh dầu tỏi hỗ trợ tăng cường đề kháng Costar Garlic Oil giúp tăng cường sức đề kháng. Hỗ trợ giảm các triệu chứng cảm cúm thông thường.",
            description: "Thành phần: Trong 1 viên nang mềm 400mg chứa: Dầu tỏi (1mg) (3000:1) (tương đương tỏi tươi 3000mg), thành phần khác: dầu đậu nành, Gelatin, Glycerol, nước tinh khiết. Công dụng: Giúp tăng cường sức đề kháng. Hỗ trợ giảm các triệu chứng cảm cúm thông thường. Đối tượng sử dụng: Người sức đề kháng kém, người bị cảm cúm thông thường. Chú ý. Thực phẩm này không phải là thuốc, không có tác dụng thay thế thuộc chữa bệnh.Không sử dụng với người mẫn cảm với thành phần của sản phẩm. Cần tham cấn ý kiến bác sỹ nếu có phản ứng với thành phần sản",
            subImg: "",
            // addDescription: "phẩm. Không dùng cho trẻ em. Cách sử dụng: Uống mỗi lần 1 viên, 3 viên mỗi ngày. Bảo quản: Bảo quản ở nhiệt độ dưới 30 độ C. Hạn sử dụng: 3 năm kể từ ngày sản xuất. Quy cách đóng gói: Lọ 60 viên. Thương hiệu: COSTAR. Nơi sản xuất: STAR COMBO AUSTRALIA PTY LTD (Úc). Công ty chịu trách nhiệm sản phẩm: Công ty TNHH Dịch vụ Hạnh Phúc. Công ty phân phối sản phẩm: Công ty Cổ phần Mãi Mãi Trẻ. Số Giấy công bố: 7401/2021/ĐKSP. Số Giấy XNQC: 2461/2021/XNQC-ATTP. Thực phẩm này không phải là thuốc, không có tác dụng thay thế thuốc chữa bệnh. Để xa tầm tay trẻ em. Đọc kỹ hướng dẫn sử dụng trước khi dùng."
        },
        {
            id: 26,
            imgSrc: "https://data-service.pharmacity.io/pmc-upload-media/production/pmc-ecm-core/products/P24936_1.jpg",
            alt: "post",
            category: "TPCN Nhóm đường huyết",
            categoryName: "Thực phẩm chức năng",
            name: "Thực phẩm bảo vệ sức khỏe phòng ngừa biến chứng tiểu đường Boni Diabet (60 viên/hộp)",
            price: 405000,
            info: "Thực phẩm bảo vệ sức khỏe phòng ngừa biến chứng tiểu đường Boni Diabet hỗ trợ bệnh tiểu đường, làm giảm glucose máu. Giúp giảm cholesterol và lipid máu. Ngăn ngừa các biến chứng của bệnh tiểu đường trên tim, gan, thận, võng mạc, các bệnh lý thần kinh ngoại biên, làm lành vết thương, ngăn ngừa xơ vữa động mạch, đục thủy tinh thể. Bổ sung vi chất, hỗ trợ chế độ ăn kiêng, làm giảm béo phì.",
            description: "Thành phần. Magnesium 30mg, kẽm 5mg, Selenium 70mcg, Chromium: 120mcg, Alpha Lipoic acid 50mcg, chiết xuất dây thìa canh 100 mg, bột mướp đắng 100mg, bột quế 50mg, Vitamin C 150mg, Acid Folic 250 mcg… Phụ liệu: Microcrystalline Cellulose, Fumed Silica. Công dụng. Hỗ trợ giúp giảm lượng đường trong máu, giúp giảm các biến chứng của bệnh tiểu đường, hỗ trợ giảm cholesterol máu. Đối tượng sử dụng: Người bị bệnh tiểu đường, biến chứng do tiểu đường gây ra.",
            subImg: "",
            // addDescription: "Cách sử dụng: Uống 2 - 4 viên/ngày, chia làm 2 lần. Bảo quản: Nơi khô ráo, tránh ẩm, tránh ánh nắng trực tiếp. Đóng gói: Hộp 60 viên. Xuất xứ thương hiệu: Mỹ. Sản xuất bởi: Công ty J&E International Corp. Địa chỉ: 1365 Stonegate Way Ferndale, WA, 98248-7824, Mỹ. Chịu trách nhiệm đưa sản phẩm ra thị trường. Công ty TNHH Thiết bị y tế Minh Duy. Địa chỉ: Số 281 Đội Cấn, Phường Liễu Giai, Quận Ba Đình, Hà Nội. Điện thoại: 0243.722.8101. Số giấy XNQC: 01507/2018/ATTP-XNQC. Sản phẩm này không phải là thuốc và không có tác dụng thay thể thuốc chữa bệnh. Để xa tầm tay trẻ em. Đọc kỹ hướng dẫn sử dụng trước khi dùng."
        },
        {
            id: 27,
            imgSrc: "https://data-service.pharmacity.io/pmc-upload-media/production/pmc-ecm-core/products/P02230_1_l.webp",
            alt: "post",
            category: "TPCN Nhóm đường huyết",
            categoryName: "Thực phẩm chức năng",
            name: "Thực phẩm bảo vệ sức khỏe hỗ trợ bệnh tiểu đường Diabetna (Hộp 40 viên)",
            price: 108000,
            info: "Thực phẩm bảo vệ sức khỏe Diabetna hỗ trợ sinh tân, chỉ khát, làm hạ đường huyết hỗ trợ phòng ngừa bệnh tiểu đường, ổn định đường huyết và ngăn ngừa các biến chứng của bệnh tiểu đường.",
            description: "Thành phần. Cao lá dây thìa canh (Gymnema sylvestre) 0,185g (tương đương 1,5g lá khô). Amidon, aerosol, PEG 6000, tween 80, talc, magnesi stearate, koli sorbat,...vừa đủ 1 viên. Công dụng. Hỗ trợ sinh tân, chỉ khát, làm hạ đường huyết hỗ trợ phòng ngừa bệnh tiểu đường, ổn định đường huyết và ngăn ngừa các biến chứng của bệnh tiểu đường. Đối tượng sử dụng.",
            subImg: "",
            // addDescription: "Dùng cho người bị tiểu đường typ I và typ II. Người có đường huyết cao, tiền đái tháo đường. Người cần ổn định đường huyết và ngăn ngừa biến chứng của bệnh tiểu đường. Cách sử dụng: Ngày uống 2 lần, mỗi lần 2 viên. Uống vào buổi sáng và buổi tối trước bữa ăn 30 phút. Bảo quản: Nơi khô ráo, nhiệt độ không quá 30 độ C, tránh ánh sáng. Quy cách đóng gói: Hộp 4 vỉ, mỗi vỉ 10 viên nang. Xuất xứ thương hiệu: Việt Nam. Tên nhà sản xuất: Công ty TNHH Nam Dược. Địa chỉ: Lô M13 (C4-9), KCN Hòa Xá, Xã Mỹ Xá, TP. Nam Định. Chịu trách nhiệm đưa sản phẩm ra thị trường: Công ty TNHH Dược phẩm Ích Nhân. Địa chỉ: Lô A18/D7 khu đô thị mới Cầu Giấy, Phường Dịch Vọng, Quận Cầu Giấy, Hà Nội. Điện thoại: 0437914041. Số giấy XNQC: 02823/2017/ATTP-XNQC. *Thực phẩm này không phải là thuốc và không có tác dụng thay thế thuốc chữa bệnh."
        },
        {
            id: 28,
            imgSrc: "https://data-service.pharmacity.io/pmc-upload-media/production/pmc-ecm-core/products/P22919_1.jpg",
            alt: "post",
            category: "TPCN Nhóm hô hấp",
            categoryName: "Thực phẩm chức năng",
            name: "Xịt mũi họng Khiết Thanh Á Âu (30ml)",
            price: 115000,
            info: "Xịt mũi họng Khiết Thanh Á Âu sử dụng làm sạch, loại bỏ bụi bẩn, loại bỏ tác nhân gây bệnh dị ứng; giúp kháng khuẩn, kháng virus, kháng viêm; làm dịu ngứa họng, rát họng, đau và sưng viêm họng.",
            description: "Thành phần. Chiết xuất Lược vàng, chiết xuất Kim ngân hoa, chiết xuất Xạ can, chiết xuất Cát cánh, Zinc sulfate heptahydrate, Mentha piperita oil, Hinokitiol, Nước tinh khiết, Dimethyl sulfoxide (DMSO), Glycerin, Propylene glycol, Polyvinyl alcohol, PEG 40 hydrogenated castor oil, Steviol glycosides, Methylparaben, Disodium Edetate, Propylparaben. Công dụng. - Sử dụng làm sạch, loại bỏ bụi bẩn, loại bỏ tác nhân gây bệnh dị ứng; giúp kháng khuẩn, kháng virus, kháng viêm; làm dịu ngứa họng, rát họng, đau và sưng viêm họng.",
            subImg: "",
            // addDescription: "- Làm loãng dịch nhầy giúp thông thoáng mũi, họng. - Sử dụng để phòng và hỗ trợ trị sổ mũi, ngạt mũi, viêm mũi dị ứng, viêm xoang, các bệnh hô hấp cấp và mạn tính do virus, vi khuẩn, do thời tiết và cảm mạo. Hướng dẫn sử dụng. - Đối với mũi: lắc nhẹ chai xịt, đưa vòi xịt vào mũi, ấn nhanh, gọn, dung dịch dạng phun sương sẽ đi sâu vào khoang mũi. - Đối với họng: lắc nhẹ chai xịt, đưa vòi xịt vào khoang miệng, ấn nhanh, gọn, dung dịch dạng phun sương sẽ đi sâu vào họng. - Ấn xịt 1-2 lần/cho mỗi bên mũi; ấn xịt 3-4 lần cho họng. Ngày dùng 3-4 lần. Thận trọng. - Có thể dùng cho trẻ từ 03 tuổi trở lên. - Không để trẻ em tự sử dụng sản phẩm. - Sau khi sử dụng, dùng giấy thấm sạch vòi xịt, đậy nắp kín tránh làm bẩn đầu xịt. Bảo quản: Nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp. Hạn sử dụng: 36 tháng kể từ ngày sản xuất. Giấy xác nhận công bố: 210001192/PCBA-HN. Sản xuất tại: Công ty TNHH Tư vấn Y Dược Quốc tế. Công ty phân phối sản phẩm: Công ty Cổ phần Châu Hưng. *Thực phẩm này không phải là thuốc và không có tác dụng thay thế thuốc chữa bệnh. Không sử dụng cho người mẫn cảm với bất kì thành phần nào của sản phẩm."
        },
        {
            id: 29,
            imgSrc: "https://data-service.pharmacity.io/pmc-upload-media/production/pmc-ecm-core/products/P26046_1.jpg",
            alt: "post",
            category: "TPCN Nhóm hô hấp",
            categoryName: "Thực phẩm chức năng",
            name: "Siro Hỗ Trợ Giảm Ho, Bổ Phổi IVY Extra (Chai 90ml)",
            price: 48000,
            info: "",
            description: "Thành phần. Húng chanh 45, 00 g. Núc nác 11, 25 g. Cao lá thường xuân khô 0, 63 g. Cineol 0, 08 g. Phụ liệu (sorbitol dung dich 70%, hương liệu, potassium sorbate) vừa đủ 1 lọ 90ml.",
            subImg: "https://data-service.pharmacity.io/pmc-upload-media/production/pmc-ecm-core/products/P26046_2.jpg",
            // addDescription: "Công dụng. Hỗ trợ bổ phế, long đờm, giảm ho. Giúp làm giảm đau rát họng, khản tiếng do ho, viêm họng. Đối tượng sử dụng. Người bị ho gió, ho khan, ho có đờm, ho do cảm lạnh, do thay đổi thời tiết. Người bị đau rát họng, ngứa họng, khản tiếng do ho kéo dài, viêm họng lâu ngày. Độ tuổi sử dụng: Mọi đối tượng kể cả trẻ sơ sinh. Cách sử dụng. Trẻ sơ sinh và trẻ em: 2,5ml syrup, 3 lần mỗi ngày. Trẻ ở độ tuổi đi học 6 – 9 tuổi và thiếu niên hơn 10 tuổi: 5mL syrup, 3 lần mỗi ngày. Người lớn: 7 ml syrup, 3 lần mỗi ngày. *Lắc kỹ trước mỗi lần dùng. Lưu ý. Không sử dụng cho người mẫn cảm với bất kỳ thành phần nào của sản phẩm. Thực phẩm này Không phải là thuốc và Không có tác dụng thay thế thuốc chữa bệnh. Thận trọng. Không sử dụng cho người mẫn cảm với bất kỳ thành phần nào của sản phẩm. Khuyến cáo. Không sử dụng cho người mẫn cảm với bất kỳ thành phần nào của sản phẩm. Bảo quản: Bảo quản nơi khô ráo thoáng mát, tránh ánh sáng trực tiếp, tránh xa tầm tay của trẻ em. Thương hiệu: MEDVIE. Nơi sản xuất: VIỆT NAM. Tên Nhà sản xuất: CÔNG TY CP LIÊN DOANH DƯỢC MỸ PHẨM DIAMOND PHÁP. Số Giấy công bố : 2037/2019/ĐKSP. Công ty chịu trách nhiệm về SP: CÔNG TY TNHH DƯỢC PHẨM MEDVIE. Công ty phân phối: CÔNG TY TNHH DƯỢC PHẨM MEDVIE. Thực phẩm này Không phải là thuốc và Không có tác dụng thay thế thuốc chữa bệnh."
        },
        {
            id: 30,
            imgSrc: "https://data-service.pharmacity.io/pmc-upload-media/production/pmc-ecm-core/products/P25864_1.jpg",
            alt: "post",
            category: "TPCN Nhóm thần kinh",
            categoryName: "Thực phẩm chức năng",
            name: "Hỗ trợ não ABIPHA Ginkgo 360 Natto Q10 (Hộp 10 vỉ x 10 viên)",
            price: 89000,
            info: "",
            description: "Thành phần. Cao ginkgo biloba: 180 mg. Nattokinase: 100 FU. Cao Lạc tiên: 70 mg. Cao bình vôi: 30 mg. Cao Vông nem: 30 mg.",
            subImg: "https://data-service.pharmacity.io/pmc-upload-media/production/pmc-ecm-core/products/P25864_2.jpg",
            // addDescription: "Magnesi oxyd (Magnesi: 9 mg): 15 mg. Vitamin B1 2 mg. Vitamin B2: 2 mg. Vitamin B6: 2 mg. Vitamin PP: 2 mg. Coenzym Q10: 1 mg. Phụ liệu: Gelatin (441), glycerin (422), sorbitol (420(i)), nipagin (218), nipasol (216), sáp ong. (901), dầu đậu nành (479), Lecithin (322i), màu thực phẩm, dầu cọ, ethyl vanillin vừa đủ 1 viên. Công dụng. Hỗ trợ tăng cường tuần hoàn não, giảm nguy cơ hình thành cục máu đông, hỗ trợ giảm các triệu chứng đau đầu, chóng mặt, mất ngủ do thiểu năng tuần hoàn não. Đối tượng sử dụng. Người có nguy cơ hoặc sau tai biến mạch máu não do nghẽn mạch. Người bị đau đầu, chóng mặt, mất ngủ do thiểu năng tuần hoàn não. Cách sử dụng. Người lớn: Uống 1 viên/lần x 2 lầng/ngày, uống sau bữa ăn. Lưu ý: Phụ nữ có thai, chuẩn bị phẩu thuật, xuất huyết, trẻ em dưới 12 tuổi, người mẫn cảm với bất kì thành phần nào của thuốc không nên dùng. Bảo quản: Nhiệt độ dưới 30 độ C, tránh ánh nắng trực tiếp. Quy cách đóng gói: 10 vỉ x 10 viên. Nơi sản xuất: Công ty cổ phần dược phẩm ABIPHA. Đơn vị phân phối: Công ty dược phẩm GINIC. Số GCB: 7946/2018/ĐKSP. Thực phẩm này không phải là thuốc và không có tác dụng thay thế thuốc chữa bệnh."
        },
        {
            id: 31,
            imgSrc: "https://data-service.pharmacity.io/pmc-upload-media/production/pmc-ecm-core/products/P21695_11.jpg",
            alt: "post",
            category: "TPCN Nhóm thần kinh",
            categoryName: "Thực phẩm chức năng",
            name: "Viên sủi hỗ trợ giảm stress Dr. Frei Magnesium + B complex (Tuýp 20 viên)",
            price: 58520,
            info: "Viên sủi hỗ trợ giảm stress Dr. Frei Magnesium + B complex giúp bổ sung magie và vitamin nhóm B (B1, B2, B6, B12) cho cơ thể, hỗ trợ giảm căng thẳng.",
            description: "Thành phần. Trong mỗi viên sủi 4g chứa: Magie (Magie carbonat) 150mg. Vitamin B6 (Pyridoxine hydroclorid) 1mg. Vitamin B2 (Riboflavin) 0,8mg. Vitamin B1 (Thiamin mononitrat) 0,7mg. Vitamin B12 (Cyanocobalamin) 0,5µg. Phụ liệu: Chất điều chỉnh độ acid (acid citric, natri hydro carbonat), chất độn (sorbitol), dextrose, chất tạo ngọt tổng hợp (aspartame), hương quýt tổng hợp, bột nước ép củ cải đường, màu tổng hợp (beta-caroten). Sản phẩm không chứa lactose, gluten.",
            subImg: "https://data-service.pharmacity.io/pmc-upload-media/production/pmc-ecm-core/products/P21695_1.jpg",
            // addDescription: "Công dụng. - Bổ sung magie và vitamin nhóm B (B1, B2, B6, B12) cho cơ thể. - Hỗ trợ giảm căng thẳng (stress). Đối tượng sử dụng. - Người lớn và trẻ em từ 14 tuổi lên có nhu cầu bổ sung magie và vitamin nhóm B (B1, B2, B6, B12). - Người làm việc căng thẳng về trí óc. Cách sử dụng. Dùng 1 viên mỗi ngày, hòa tan trong một cốc nước (200ml). Khuyến cáo. - Không dùng khi mẫn cảm với bất cứ thành phần nào của sản phẩm. - Không phù hợp cho trẻ em dưới 14 tuổi. Để xa tầm tay trẻ nhỏ. - Không dùng quá liều khuyến nghị hàng ngày. - Thực phẩm bảo vệ sức khỏe không thay thế chế độ ăn cân bằng, đa dạng và lối sống lành mạnh. Bảo quản: Bảo quản dưới 25 độ C ở nơi khô ráo và đậy nắp kín. Thời hạn sử dụng: 36 tháng kể từ ngày sản xuất. NSX, HSD: Xem “MFD” và “EXP” ở mặt đáy bao bì. Đóng gói: 80g (20 viên x 4g/viên)/tuýp. Xuất xứ thương hiệu: Đức. Sản xuất bởi: Sanotact GmbH. Địa chỉ: Hessenweg 10, 48157 Münster, Germany. Thương nhân công bố, nhập khẩu và chịu trách nhiệm về sản phẩm. CÔNG TY TNHH MEDPACK PLUS. Địa chỉ: Lầu 7, Tòa nhà HP, số 60 đường Nguyễn Văn Thủ, Phường Đa Kao, Quận 1, Thành phố Hồ Chí Minh, Việt Nam. Sản phẩm này không phải là thuốc và không có tác dụng thay thế thuốc chữa bệnh. Để xa tầm tay trẻ em. Đọc kỹ hướng dẫn sử dụng trước khi dùng."
        },
        {
            id: 32,
            imgSrc: "https://data-service.pharmacity.io/pmc-upload-media/production/pmc-ecm-core/products/P26033_1.jpg",
            alt: "post",
            category: "TPCN Nhóm cơ xương khớp",
            categoryName: "Thực phẩm chức năng",
            name: "Hỗ trợ xương khớp ALPHA Green Sun Carlotta (Hộp 2 vỉ x 15 viên)",
            price: 360000,
            info: "",
            description: "Thành phần. Canxi gluconat: 1000mg (có chứa 93mg Canxi), Magie (Magie oxit): 200mg, Kēm (Kem oxit): 12.5mg, Vitamin K2 (menaquinone MK-7): 60µg, Vitamin D3 (cholecalciferol): 400IU (10µg). Phụ liệu: gelatin (vỏ nang), chất độn: tinh bột ngô, chất chống động vốn; các muối magie của các axit béo, chất chống đông vón: silicon dioxit. Công dụng. Hỗ trợ xương chắc khỏe, giúp giảm nguy cơ loãng xương ở người lớn và còi xương ở trẻ nhỏ do thiếu vitamin D3. Đối tượng sử dụng: Trẻ em trên 9 tuổi và người lớn, phụ nữ có thai và cho con bú.",
            subImg: "",
            // addDescription: "Độ tuổi sử dụng: Trẻ em trên 9 tuổi và người lớn, phụ nữ có thai và cho con bú. Cách sử dụng. Trẻ em trên 9 tuổi, người lớn: uống 1 - 2 viên/ngày. Khuyến cáo. Thực phẩm này không phải là thuốc, không có tác dụng thay thế thuốc chữa bệnh. Không sử dụng cho người mẫn cảm, kiêng kỵ với bất kỳ thành phần nào của sản phẩm. Không sử dụng vượt quá liều khuyến cáo hàng ngày. Thực phẩm bổ sung không nhằm thay thế cho một chế độ ăn uống cân bằng, đa dạng và lối sống lành mạnh. Để xa tầm tay của trẻ em dưới 3 tuổi. Người đang dùng thuốc cần tham khảo ý kiến chuyển gia y tế trước khi sử dụng. Hạn sử dụng: 36 tháng kể từ ngày sản xuất. Ngày sản xuất và hạn sử dụng được ghi trên bao bì sản phẩm. Bảo quản: Bảo quản nơi khô ráo, thoáng mát, tránh ánh sáng. Thương hiệu: Green Sun Carlotta. Nơi sản xuất: Ý. Tên Nhà sản xuất: Erbex Srl. Số Giấy công bố: 661/2023/ĐKSP. Công ty chịu trách nhiệm về SP: Công ty Cổ phần Quốc tế Ánh Dương Xanh. Thực phẩm này không phải là thuốc, không có tác dụng thay thế thuốc chữa bệnh."
        },
        {
            id: 33,
            imgSrc: "https://data-service.pharmacity.io/pmc-upload-media/production/pmc-ecm-core/products/P25941_1.jpg",
            alt: "post",
            category: "TPCN Nhóm cơ xương khớp",
            categoryName: "Thực phẩm chức năng",
            name: "Bổ sung canxi DHC Calcium + CBP (Gói 120 viên)",
            price: 210000,
            info: "",
            description: "Thành phần. Bột vỏ trứng, Whey protein hoạt tính cô đặc từ sữa bò, Vitamin D3, phụ liệu. Protein 0,035g. Chất béo 0,05g. Carbohydrate 0,63g. Muối tương đương 0,002g.",
            subImg: "",
            // addDescription: "Vitamin D 0,07μg. Canxi 370mg. CBP (đạm whey cô đặc) 12mg. Công dụng. Hỗ trợ bổ sung calci, hỗ trợ hệ xương răng chắc khỏe, hỗ trợ phát triển chiều cao cho trẻ. Hỗ trợ làm giảm nguy cơ loãng xương ở người cao tuổi, còi xương ở trẻ em." Đối tượng sử dụng Trẻ em đang tuổi lớn. Trẻ từ 3 tuổi trở lên. Trẻ em muốn có cơ thể chắc khỏe. Người muốn có bộ xương chắc khỏe. Người cần hỗ trợ việc hình thành xương, mọc răng. Người nhiều tuổi bị loãng xương. Người đang ăn kiêng, có biểu hiện dễ nóng giận, khó ở. Cách sử dụng. Uống 4 viên/ngày. Uống với nước hoặc nước ấm, hoặc nhai. Lưu ý Sản phẩm này không phải là thuốc và không có tác dụng thay thế thuốc chữa bệnh. Dừng uống khi phát hiện dấu hiệu sức khỏe bất thường. Không sử dụng cho người mẫn cảm với bất cứ thành phần nào của sản phẩm. Tham khảo ý kiến bác sĩ trước khi dùng nếu bạn đang dùng thuốc khác hoặc đang điều trị tại bệnh viện. Để xa tầm tay trẻ em. Sử dụng ngay sau khi mở bao bì. Đóng túi ngay sau khi sử dụng. Chống chỉ định: Không sử dụng cho người mẫn cảm với bất cứ thành phần nào của sản phẩm. Bảo quản: Nơi khô ráo, thoáng mát, tránh ánh sáng mặt trời. Thương hiệu: DHC. Nơi sản xuất: Nhật Bản. Tên Nhà sản xuất: Biholon Company, Ltd., Osawano factory. Số Giấy Xác nhận nội dung quảng cáo: 1757/2020/XNQC-ATTP. Số Giấy công bố 9987/2019/ĐKSP. Công ty chịu trách nhiệm về SP: Công ty Cổ phần Belie. Công ty phân phối: Công ty Cổ phần Belie. Sản phẩm này không phải là thuốc và không có tác dụng thay thế thuốc chữa bệnh."
        },
        {
            id: 34,
            imgSrc: "https://data-service.pharmacity.io/pmc-upload-media/production/pmc-ecm-core/products/P24856_1.jpg",
            alt: "post",
            category: "TPCN giảm cân",
            categoryName: "Thực phẩm chức năng",
            name: "Hỗ trợ giảm cân Body Slim Premium (Hộp 30 viên)",
            price: 396000,
            info: "",
            description: "Thành phần. Mỗi viên nang cứng có chứa: Chiết xuất lá sen 220mg. Chiết xuất kim ngân hoa 100mg. Chiết xuất nấm linh chi 60mg. Chiết xuất sâm đất 50mg",
            subImg: "https://data-service.pharmacity.io/pmc-upload-media/production/pmc-ecm-core/products/P24856_2.jpg",
            // addDescription: "Chiết xuất chè vằng 50mg. Chiết xuất vỏ bưởi 20mg. Chiết xuất hạt nho (nguyên liệu nhập từ Pháp) 10mg. Phụ liệu: Vỏ nang (gelatin), tinh bột, talc vừa đủ 1 viên. Công dụng. Giúp tăng cường chuyển hóa chất béo. giúp giảm mỡ máu, hỗ trợ giảm béo. Đối tượng sử dụng. Người trưởng thành mỡ máu cao, người thừa cân béo phì, người muốn giảm béo. Cách dùng. Uống 1-2 viên trước bữa ăn sáng 15 phút. Người bị đau dạ dày sử dụng sau khi ăn 15-30 phút. Lưu ý: Mỗi ngày nên uống 2-3 lít nước. Hạn chế đồ ăn nhiều tinh bột, ăn nhiều rau xanh, hoa quả, kết hợp vận động. Hạn chế các đồ uống có ga, cồn. Cảnh báo. Không dùng cho phụ nữ có thai, phụ nữ cho con bú, người cao huyết áp, người có tiền sử bệnh tim mạch, người bị tiểu đường, người mẫn cảm với các thành phần của thuốc. Bảo quản: Nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp. Quy cách đóng gói: Hộp 30 viên. Công ty chịu trách nhiệm về sản phẩm: Công ty cổ phần TM Natulife Việt Nam. Sản xuất tại: Công ty TNHH dược phẩm Tradiphar. Số giấy ĐKSP: 10785/2020/ĐKSP.Thực phẩm này không phải là thuốc và không có tác dụng thay thế thuốc chữa bệnh."
        },
        {
            id: 35,
            imgSrc: "https://data-service.pharmacity.io/pmc-upload-media/production/pmc-ecm-core/products/P24911_1.jpg",
            alt: "post",
            category: "TPCN giảm cân",
            categoryName: "Thực phẩm chức năng",
            name: "Thực phẩm bảo vệ sức khỏe hỗ trợ kiểm soát cân nặng, phòng ngừa béo phì Ecogreen Lic (Hộp 60 viên)",
            price: 675000,
            info: "Thực phẩm bảo vệ sức khỏe hỗ trợ kiểm soát cân nặng, phòng ngừa béo phì Ecogreen Lic giúp kiểm soát cân nặng và giảm cân hiệu quả, an toàn, cải thiện số đo các vùng eo, bụng, đùi trong vòng 2-8 tuần, phòng ngừa các bệnh mãn tính do béo phì: tim mạch, tiểu đường, rối loạn nội tiết, hô hấp, xương khớp, ung thư… Sản phẩm đã qua thử nghiệm lâm sàng về hiệu quả, LIC giúp giảm cân an toàn, không gây mất nước và mệt mỏi.",
            description: "Thành phần. - Belaunja extract: 300 mg. - Mangastin extract: 100 mg. - Psilio husk powder: 200 mg. - Phụ gia: vừa đủ 1 viên. Công dụng.",
            subImg: "https://data-service.pharmacity.io/pmc-upload-media/production/pmc-ecm-core/products/P24911_2.jpg",
            // addDescription: "- Giúp kiểm soát cân nặng và giảm cân hiệu quả, an toàn. - Cải thiện số đo các vùng eo, bụng, đùi trong vòng 2-8 tuần. - Phòng ngừa các bệnh mãn tính do béo phì: tim mạch, tiểu đường, rối loạn nội tiết, hô hấp, xương khớp, ung thư… - Sản phẩm đã qua thử nghiệm lâm sàng về hiệu quả. LIC giúp giảm cân an toàn, không gây mất nước và mệt mỏi. Cách sử dụng. - Liều giảm cân: dùng 1 viên x 2 lần/ngày. - Liều duy trì cân nặng: dùng 1 viên/ngày. Đối tượng sử dụng. - Dùng cho người trên 12 tuổi muốn giảm cân hoặc muốn kiểm soát cân nặng, vóc dáng. - Sử dụng cho cả nam và nữ. Chống chỉ định: Không dùng cho phụ nữ có thai hoặc cho con bú. Hạn sử dụng: 36 tháng kể từ ngày sản xuất. Bảo quản: Nơi khô ráo, thoáng mát, nhiệt độ dưới 30 độ C, tránh ẩm và ánh nắng mặt trời. Quy cách đóng gói: Chai 60 viên. Thương hiệu: ECOGREEN. Sản xuất tại: Mỹ. Tên nhà sản xuất: St. Paul Brands. Số Giấy công bố: 49715/2017/ATTP-XNCB. Công ty chịu trách nhiệm sản phẩm: Công ty Cổ phần Dược phẩm ECO. Công ty phân phối sản phẩm: Công ty Cổ phần Dược phẩm ECO. Thực phẩm này không phải là thuốc, không có tác dụng thay thế thuốc chữa bệnh. Để xa tầm tay trẻ em. Đọc kỹ hướng dẫn sử dụng trước khi dùng."
        },
        {
            id: 36,
            imgSrc: "https://data-service.pharmacity.io/pmc-upload-media/production/pmc-ecm-core/products/P25870_1.jpg",
            alt: "post",
            category: "TPCN Chăm sóc sắc đẹp",
            categoryName: "Thực phẩm chức năng",
            name: "Nước uống collagen đẹp da 82X Shiharu Collagen (Hộp 10 chai)",
            price: 790000,
            info: "",
            description: "Thành phần. 4.200mg collagen + 125mg chiết xuất 82 thực vật lên men + 70,4 mg Zinc gluconate + 25mg bột chiết xuất hoa anh đào + 22,8mg Mg Cloride + 12,5 mg tơ tằm thủy phân + 1 mg vitamin E (D - alpha Tocopherol) + 10mg chiết xuất Hoa trà + 360mcg vitamin A (Retinyl Palmitate) + 2,5mg HA + 2,75mcg vitamin D (Cholecalciferol) + 15mcg coenzyme Q10 + 250mcg Elastin thủy phân. Loại da: Da lão hóa, da khô, da nhăn, da kém đàn hồi. Đối tượng sử dụng. Người lớn, da bị lão hóa, da khô sạm, da nhăn, kém đàn hồi.",
            subImg: "https://data-service.pharmacity.io/pmc-upload-media/production/pmc-ecm-core/products/P25870_2.jpg",
            // addDescription: "Người có nhu cầu làm đẹp da, cải thiện sức khỏe tiêu hóa và miễn dịch. Độ tuổi sử dụng: > 18 tuổi. Công dụng. TRIPLE X: TÁC ĐỘNG ĐA CHIỀU – TRẺ HOÁ LÀN DA. TRIPLE X1 - 4 TUẦN TRẺ HÓA LÀN DA: Cấp ẩm sâu, nâng cơ, mờ nhăn, tái sinh toàn diện. Nhờ kết hợp nguyên liệu tinh khiết (collagen peptide, chiết xuất hạt hoa trà, hoa anh đào, tơ thuỷ phân, HA, coenzyme Q10) và công nghệ độc quyền Kosoteki giúp tăng tốc độ hấp thu nhanh gấp 6 lần. Đồng thời kết hợp các dưỡng chất chiết xuất hạt hoa trà, hoa anh đào, tơ thuỷ phân, HA, coenzyme Q10 tạo ra nền tảng vững chắc cho mạng lưới collagen và elastin vững mạnh, tăng sinh tốt hơn. TRIPLE X2 - TỐI ƯU CHUYỂN HÓA: Giúp cơ thể đào thải độc tố, giảm bớt nguy cơ lão hóa, bệnh tật. Nhờ kết hợp bộ 3 dưỡng chất: 82 thực vật lên men, Magie, ZinC. TRIPLE X3 - TĂNG CƯỜNG THỂ CHẤT: Giảm căng thẳng, mệt mỏi, tăng cường thể chất, thúc đẩy khả năng hồi phục cơ thể và làn da lên tới 30%. Nhờ tác động của bộ đôi dưỡng chất Magie, ZinC. Cách sử dụng. Ngày uống 1 chai, có thể uống trong ngày nhưng nên uống vào buổi tối để đạt hiệu quả tối ưu nhất. Lưu ý. Uống ngay khi mở nắp, bảo quản tủ lạnh trường hợp không dùng hết. Chống chỉ định. Người bị dị ứng với bất kỳ thành phần nào trong sản phẩm. Bà mẹ có thai và cho con bú hỏi ý kiến bác sỹ trước khi sử dụng. Bảo quản: Điều kiện thường, tránh ánh nắng trực tiếp vào sản phẩm. Quy cách đóng gói: Hộp 10 chai x 50ml. Thương hiệu: 82X. Nơi sản xuất: Nhật Bản. Tên Nhà sản xuất: KOTOBUKI CORPORATION YUKI FACTORY. Số Giấy công bố: 02/LYCHEE/2022. Công ty chịu trách nhiệm về SP: Công ty Cổ phần Lychee. Công ty phân phối: Công ty TNHH Mashiro - Nhật Bản."
        },
        {
            id: 37,
            imgSrc: "https://data-service.pharmacity.io/pmc-upload-media/production/pmc-ecm-core/products/P21697_1_l.webp",
            alt: "post",
            category: "TPCN Chăm sóc sắc đẹp",
            categoryName: "Thực phẩm chức năng",
            name: "Viên sủi bổ sung collagen Dr. Frei Collagen (Tuýp 20 viên)",
            price: 148800,
            info: "Viên sủi Dr. Frei Collagen giúp bổ sung collagen cho cơ thể, hỗ trợ cải thiện độ đàn hồi da.",
            description: "Thành phần. Trong mỗi viên sủi 4g chứa: Collagen thủy phân (từ cá) 500mg. Phụ liệu: Chất điều chỉnh độ acid (acid citric, natri hydro carbonat), chất độn (sorbitol), maltodextrin, bột củ cải đường, hương dâu tổng hợp, chất tạo ngọt tổng hợp (sucralose) vừa đủ 1 viên. Sản phẩm không chứa lactose, gluten. Công dụng. Bổ sung collagen cho cơ thể. Hỗ trợ cải thiện độ đàn hồi da. Đối tượng sử dụng.",
            subImg: "",
            // addDescription: "Người trưởng thành có nhu cầu làm đẹp da, cải thiện độ đàn hồi da. Cách sử dụng. Dùng 1 viên mỗi ngày, hòa tan trong một cốc nước (200ml). Khuyến cáo. - Không dùng khi mẫn cảm với bất cứ thành phần nào của sản phẩm. - Không phù hợp cho trẻ em dưới 14 tuổi. - Không dùng quá liều khuyến nghị hàng ngày. - Thực phẩm bảo vệ sức khỏe không thay thế chế độ ăn cân bằng, đa dạng và lối sống lành mạnh. Bảo quản: Bảo quản dưới 25 độ C ở nơi khô ráo và đậy nắp kín. Thời hạn sử dụng: 36 tháng kể từ ngày sản xuất. NSX, HSD: Xem “MFD” và “EXP” ở mặt đáy bao bì. Đóng gói: 80g (20 viên x 4g/viên)/tuýp. Xuất xứ thương hiệu: Đức. Sản xuất bởi: Sanotact GmbH. Địa chỉ: Hessenweg 10, 48157 Münster, Germany. Thương nhân công bố, nhập khẩu và chịu trách nhiệm về sản phẩm. CÔNG TY TNHH MEDPACK PLUS. Địa chỉ: Lầu 7, Tòa nhà HP, số 60 đường Nguyễn Văn Thủ, Phường Đa Kao, Quận 1, Thành phố Hồ Chí Minh, Việt Nam. Sản phẩm này không phải là thuốc và không có tác dụng thay thế thuốc chữa bệnh. Để xa tầm tay trẻ em. Đọc kỹ hướng dẫn sử dụng trước khi dùng."
        },
        {
            id: 38,
            imgSrc: "https://data-service.pharmacity.io/pmc-upload-media/production/pmc-ecm-core/products/P22986_1.jpg",
            alt: "post",
            category: "Chăm sóc mặt",
            categoryName: "Chăm sóc sắc đẹp",
            name: "Sữa rửa mặt Acne-Aid Liquid Cleanser (Chai 100ml)",
            price: 175000,
            info: "Sữa rửa mặt Acne-Aid Liquid Cleanser làm sạch da dịu nhẹ, giúp loại bỏ dầu cho da. Thích hợp sử dụng hàng ngày, đặc biệt cho da dầu và mụn.",
            description: "Thành phần. Aqua, Sodium Lauroyl Sarcosinate, Myristic Acid, Disodium Laureth Sulfosuccinate, Glycerin, PEG-7 Glyceryl Cocoate, Cocamidopropyl Betaine, Sulfated Olive Oil, Glycol Distearate, Paraffinum Liquidum, Acrylates/C10-30 Alkyl Acrylate Crosspolymer, Disodium EDTA, Imidazolidinyl Urea, Parfum, Sorbitan Oleate, Sodium Hydroxide. Công dụng. Sữa rửa mặt Acne-Aid Liquid Cleanser làm sạch da dịu nhẹ, giúp loại bỏ dầu cho da. Thích hợp sử dụng hàng ngày, đặc biệt cho da dầu và mụn. Cách sử dụng: Lắc kỹ trước khi dùng. Mát xa một lượng sữa rửa mặt lên da ướt, rửa sạch.",
            subImg: "https://data-service.pharmacity.io/pmc-upload-media/production/pmc-ecm-core/products/P22986_2.jpg",
            // addDescription: "Đối tượng sử dụng: Dành cho da dầu & da mụn. Giới tính: Mọi giới tính. Lưu ý: Tránh tiếp xúc với mắt. Khả năng gây kích ứng thấp, ngưng sử dụng nếu như có xảy ra. Đặc tính: Có độ pH cân bằng. Hạn sử dụng: 03 năm. Bảo quản: Bảo quản dưới 30 độ C. Quy cách đóng gói: Chai 100ml. Thương hiệu: Acne-Aid. Sản xuất tại: Thái Lan. Công ty chịu trách nhiệm về sản phẩm: iNova Pharmaceuticals. Công ty phân phối: Công ty TNHH DKSH Việt Nam. Số Giấy công bố: 150775/21/CBMP-QLD. Số Giấy XNQC: 199/2021/XNQC-YTHCM."
        },
        {
            id: 39,
            imgSrc: "https://data-service.pharmacity.io/pmc-upload-media/production/pmc-ecm-core/products/P22097_1.jpg",
            alt: "post",
            category: "Chăm sóc mặt",
            categoryName: "Chăm sóc sắc đẹp",
            name: "Serum giúp làm sáng da Balance Active Formula Niacinamide Blemish Recovery Serum (30ml)",
            price: 152000,
            info: "Serum Balance Active Formula Niacinamide 15% giúp làm sáng da, giúp tăng độ đàn hồi cho da, giúp da mịn màng.",
            description: "Thành phần. Aqua (Water), Niacinamide, Propylene Glycol, Butylene Glycol, Betaine, Phenoxyethanol, PPG-26-Buteth-26, Panthenol, PEG-40 Hydrogenated Castor Oil, Caprylyl Glycol, Carbomer, Disodium EDTA, Sodium Hydroxide. Công dụng. Sản phẩm dưỡng da, giúp làm sáng da, giúp tăng độ đàn hồi cho da, giúp da mịn màng. Đối tượng sử dụng: Trên 12 tuổi",
            subImg: "https://data-service.pharmacity.io/pmc-upload-media/production/pmc-ecm-core/products/P22097_1a.jpg",
            // addDescription: "Loại da phù hợp: Da mụn. Cách sử dụng: Vào mỗi sáng và tối, thoa serum lên vùng mặt và vùng cổ, massage nhẹ nhàng. Lưu ý: Chỉ dùng ngoài da, dừng lại nếu da bị kích ứng. Bảo quản: Khô ráo, thoáng mát. Quy cách đóng gói: Hộp 1 chai 30ml. Thương hiệu: Balance Active Formula. Sản xuất tại: Creightons PLC (Anh Quốc). 1210 Lincoln Road Werrington Peterborough Cambridgeshire PE4 6ND, UK. Công ty chịu trách nhiệm phân phối và đưa sản phẩm ra thị trường: Công ty TNHH Royal London Import Export. Lầu 5, Số 41, Đường 41, Phường Thảo Điền, Quận 2, Thành phố Hồ Chí Minh, Việt Nam. Số Giấy công bố: 146909/21/CBMP-QLD. *Cam kết chỉ bán sản phẩm còn dài hạn sử dụng."
        },
        {
            id: 40,
            imgSrc: "https://data-service.pharmacity.io/pmc-upload-media/production/pmc-ecm-core/products/P25518_2.jpg",
            alt: "post",
            category: "Sản phẩm chống nắng",
            categoryName: "Chăm sóc sắc đẹp",
            name: "Kem chống nắng Cancer Council Everyday Value Sunscreen SPF50 (Chai 110ml)",
            price: 395000,
            info: "",
            description: "Thành phần. AQUA, ISOPROPYL PALMITATE, OCTOCRYLENE, HOMOSALATE, BUTYL METHOXYDIBENZOYLMETHANE, ALCOHOL DENAT, GLYCERIN, SILICA, POLYGLYCERYL-3 DIISOSTEARATE, PVP/HEXADECENE COPOLYMER, CETEARYL ALCOHOL, PHENOXYETHANOL. Công dụng. Kem chống nắng cho da hàng ngày, đồng thời giúp cung cấp độ ẩm cho da. Sản phẩm thích hợp cho da nhạy cảm.",
            subImg: "",
            // addDescription: "Cách sử dụng. Dùng cho vùng da khô sạch 20 phút trước khi ra ngoài. Để đảm bảo hiệu quả của kem chống nắng, hãy sử dụng lại sau mỗi 2 giờ hoặc sau khi bơi, đổ mồ hôi hoặc lau khô bằng khăn. Đóng gói: Chai 110ml Bảo quản: Nơi khô ráo thoáng mát. Sản xuất tại: Australia. Số giấy phép công bố: 162809/21/CBMP-QLD."
        },
        {
            id: 41,
            imgSrc: "https://data-service.pharmacity.io/pmc-upload-media/production/pmc-ecm-core/products/P03574_1.jpg",
            alt: "post",
            category: "Sản phẩm chống nắng",
            categoryName: "Chăm sóc sắc đẹp",
            name: "Sữa chống nắng bảo vệ hoàn hảo mát lạnh Bioré Uv Perfect Protect Milk Cool SPF50+ PA+++ (25ml)",
            price: 70000,
            info: "Sữa chống nắng Bioré Uv Perfect Protect Milk Cool SPF50+ PA+++, sử dụng trên da để ngăn ngừa hay giảm sự rám nắng, giúp kháng khuẩn.",
            description: "Thành phần: Cyclopentasiloxane, Water, Alcohol, Zinc Oxide, Ethylhexyl Methoxycinnamate, Glycerin, Dimethicone,... Công dụng: Sử dụng trên da để ngăn ngừa hay giảm sự rám nắng, kháng khuẩn. Hướng dẫn sử dụng: Lắc kỹ, thoa nhẹ đều khắp vùng mặt và toàn thân trước khi đi ra ngoài nắng. Thoa lại khi ra mồ hôi hoặc bơi lâu dưới nước để có hiệu quả chống nắng tốt nhất. Bảo quản:",
            subImg: "https://data-service.pharmacity.io/pmc-upload-media/production/pmc-ecm-core/products/P03574_2.jpg",
            // addDescription: "Tránh nhiệt độ cao, ánh nắng trực tiếp. Đóng nắp sau khi sử dụng. Khuyến cáo: Không ở ngoài nắng quá lâu ngay cả khi đang sử dụng sản phẩm chống nắng. Ngưng sử dụng và nhận tư vấn từ bác sĩ khi thấy dị ứng xảy ra. Dung tích: 25ml. Xuất xứ thương hiệu: Nhật Bản. Sản xuất tại: Việt Nam. Số giấy công bố: 004/21/CBMP-ĐN. *Cam kết chỉ bán sản phẩm còn dài hạn sử dụng."
        },
        {
            id: 42,
            imgSrc: "https://data-service.pharmacity.io/pmc-upload-media/production/pmc-ecm-core/products/P01352_1_l.webp",
            alt: "post",
            category: "Dụng cụ làm đẹp",
            categoryName: "Chăm sóc sắc đẹp",
            name: "Tăm bông người lớn Meriday Bạch Tuyết (40 que/gói)",
            price: 33000,
            info: "Đầu bông được làm từ 100% bông xơ tự nhiên. Bông được quấn với kỹ thuật cao, làm cho bông chắc và mịn. Thân tăm bông làm từ nhựa dẻo, có độ đàn hồi tốt, thành phần không gây hại cho sức khỏe người dùng.",
            description: "",
            subImg: "",
        },
        {
            id: 43,
            imgSrc: "https://data-service.pharmacity.io/pmc-upload-media/production/pmc-ecm-core/products/P14735_11.jpg",
            alt: "post",
            category: "Dụng cụ làm đẹp",
            categoryName: "Chăm sóc sắc đẹp",
            name: "Bông tẩy trang cao cấp dạng tròn Pharmacity (80 miếng/túi)",
            price: 26500,
            info: "Bông tẩy trang cao cấp dạng tròn Pharmacity được làm từ 100% cotton thiên nhiên mềm mại như mây mang lại cảm giác dễ chịu khi sử dụng. Sản phẩm giúp tẩy trang hiệu quả, làm sạch lớp trang điểm và bụi bẩn, đem lại cho bạn làn da sạch thoáng và tươi tắn mà không để lại xơ bông trên da. Bông tẩy trang dạng túi tiện lợi, phù hợp để bạn mang theo sử dụng trong các chuyến du lịch hay bất cứ nơi đâu.",
            description: "Thành phần: 100% Cotton thiên nhiên. Công dụng: Giúp tẩy trang làm sạch da mặt. Đắp mặt nạ chăm sóc da. Sử dụng để lau chùi móng tay, chân. Hướng dẫn sử dụng: Làm ướt bông bằng nước sạch, nước hoa hồng hoặc dung dịch dưỡng da rồi lau nhẹ lên mặt. Sản phẩm chỉ sử dụng một lần. Bảo quản: Nơi khô ráo, tránh ánh nắng và nơi ẩm ướt.",
            subImg: "https://data-service.pharmacity.io/pmc-upload-media/production/pmc-ecm-core/products/P14735_12.jpg",
            // addDescription: "Quy cách đóng gói: 80 miếng/túi. Xuất xứ thương hiệu: Việt Nam. Sản xuất tại: Việt Nam. *Cam kết chỉ bán sản phẩm còn dài hạn sử dụng."
        },
        {
            id: 44,
            imgSrc: "https://data-service.pharmacity.io/pmc-upload-media/production/pmc-ecm-core/products/P24394_4.jpg",
            alt: "post",
            category: "Dược - Mỹ phẩm",
            categoryName: "Chăm sóc sắc đẹp",
            name: "Kem trị ngứa Bepanthen® Itch Relief Cream (Tuýp 20g)",
            price: 140000,
            info: "",
            description: "Thành phần: Aqua, Caprylic/Capric Triglyceride, Glycerin, Pentylene glycol, Olea Europaea Fruit Oil, Panthenol, Cetearyl Alc hol, Butyrospermum Parkii Butter, Glyceryl Stearate Citrate, Limnanthes Alba Seed Oil, Butylene Glycol, Hydrogenated Lecithin, Ceramide 3, Sodium PCA, Squalane, Stearyl Glycyrrheti-nate, Carbomer, Sodium Carbomer, Xanthan Gum, Hydroxyphenyl Propamidobenzoic acid. Công dụng: Bepanthen® Itch Relief Cream được sử dụng để giảm ngứa và mẩn đỏ trong các trường hợp kích ứng vùng da không có vết thương hở như viêm da cơ địa (chàm/eczema), khô da. Loại da: Da khô, nhạy cảm và dễ bị chàm (eczema). Cách sử dụng.",
            subImg: "https://data-service.pharmacity.io/pmc-upload-media/production/pmc-ecm-core/products/P24394_5.jpg",
            // addDescription: "Bepanthen Itch Relief Cream được chỉ định làm giảm ngứa và đỏ do da khô hoặc viêm da cơ địa (chàm/eczema). Bepanthen® Itch Relief Cream không chứa corticoid và có thể dùng vài lần/ ngày, khi cần trên các vùng da bị kích ứng không có vết thương hở. Hạn sử dụng: 24 tháng. Bảo quản: Bảo quản dưới 30°C. Sản xuất: Đức. Số giấy công bố: 220001681/PCBB-BYT. Công ty chịu trách nhiệm SP: Công ty TNHH Bayer Việt Nam."
        },
        {
            id: 45,
            imgSrc: "https://data-service.pharmacity.io/pmc-upload-media/production/pmc-ecm-core/products/P25951_1.jpg",
            alt: "post",
            category: "Dược - Mỹ phẩm",
            categoryName: "Chăm sóc sắc đẹp",
            name: "Gel Dermatix Ultra Kids trị sẹo cho bé (Tuýp 5g)",
            price: 225000,
            info: "",
            description: "Thành phần. Gel silicon polymer (CPX) và Vitamin C Ester. Công dụng. Dermatix® Ultra Kids là sản phẩm xử lý sẹo tiên tiến đã được chứng minh hiệu quả trên phác đồ xử lý sẹo như: - Té ngã. - Bỏng.",
            subImg: "https://data-service.pharmacity.io/pmc-upload-media/production/pmc-ecm-core/products/P25951_2.jpg",
            // addDescription: "- Vết cắt. - Trầy xước. - Côn trùng cắn. - Phẫu thuật. Đối tượng sử dụng. An toàn và dịu nhẹ cho trẻ từ 3 tháng tuổi trở lên. Cách sử dụng. Điều trị sẹo với 3 bước đơn giản. Sử dụng dễ dàng: Lấy gel với lượng to bằng hạt đậu vào giữa vết sẹo và nhẹ nhàng xoa mỏng lan rộng ra ngoài cho toàn vùng sẹo. 2 lần/ngày: Nên thoa 2 lần vào sáng – tối để làn da được bảo vệ suốt 24h. 2 tháng dùng đều đặn: Kiên trì để đạt hiệu quả làm phẳng, mềm và mờ sẹo. Tác dụng của sản phẩm sẽ tùy thuộc vào cơ địa của mỗi người. Lưu ý. - Bạn chỉ cần một lượng nhỏ bằng hạt đậu Dermatix® Ultra Kids cho mỗi lần sử dụng. Việc thoa nhiều sẽ gây lãng phí và cần thời gian nhiều hơn để gel khô. Không thoa lên vết thương hở hoặc còn chảy dịch. Tác dụng của thuốc sẽ tùy thuộc vào cấu trúc cơ địa của mỗi người. Bảo quản: Dưới 25 độ và tránh xa nguồn nhiệt. Giữ xa tầm tay trẻ em. Quy cách đóng gói: Tuýp 5g. Thương hiệu: Menarini (Ý). Nhà sản xuất: Menarini. Nơi sản xuất: Singapore."
        },
    ];
    localStorage.setItem('productsData', JSON.stringify(productsData));

    const productContainer = document.getElementById("posts-main-container");
    const menuButtons = document.querySelectorAll('.menu-btn');
    const sortSelect = document.getElementById("sort-items");


    function createProductElement(product) {
        
        const productDiv = document.createElement("a");
        if (localStorage.getItem('dangnhap')) {
            productDiv.href = 'detail-login.html?id=' + product.id;
        }
        else{
            productDiv.href = 'detail.html?id=' + product.id;
        }
        productDiv.classList.add("product-container");
        productDiv.innerHTML = `
        <div class="post-img">
            <img src="${product.imgSrc}" alt="${product.alt}">
        </div>
        <div class="post-content">
            <h3>${product.name}</h3>
            <p>${product.price.toLocaleString()} VNĐ</p>
            <button type="button" class="cart-btn">Thêm vào giỏ hàng</button>
        </div>
        `
         ;
        
         const popuplogin1 = document.querySelector(".login");
         console.log(popuplogin1)
        const cartBtn = productDiv.querySelector(".cart-btn");
        productDiv.dataset.id = product.id;
        cartBtn.addEventListener('click', function (event) {
            if (localStorage.getItem('dangnhap')) {
                event.preventDefault();
                let positionClick = event.target;
                if (positionClick.classList.contains('cart-btn')) {
                    let id_product = productDiv.dataset.id;
                    addToCart(id_product);
                }
            } else {
                popuplogin1.style.display = "block";
                event.preventDefault();

            }
        });
        addCartToHTML();
        return productDiv;
    }

    
    // CART
    let listCartHTML = document.querySelector('.listCart');
    let iconCart = document.querySelector('#icon-cart');
    let iconCartSpan = document.querySelector('#icon-cart span');
    let body = document.querySelector('body');
    let closeCart = document.querySelector('.close');
    let cartTotalSpan = document.querySelector('#total');
    let cart = JSON.parse(localStorage.getItem(a)) || [];
    iconCart.addEventListener('click', () => {
        if (localStorage.getItem('dangnhap')) {
        body.classList.toggle('showCart');
        return;}
    });

    closeCart.addEventListener('click', () => {
        body.classList.toggle('showCart');
    });

    const addToCart = (product_id) => {
        let positionThisProductInCart = cart.findIndex((value) => value.product_id == product_id);

        if (cart.length <= 0) {
            cart = [{
                product_id: product_id,
                quantity: 1
            }];
        } else if (positionThisProductInCart < 0) {
            cart.push({
                product_id: product_id,
                quantity: 1
            });
        } else {
            cart[positionThisProductInCart].quantity += 1;
        }

        addCartToHTML();
        addCartToMemory();
    };
    const addCartToMemory = () => {
        localStorage.setItem(a, JSON.stringify(cart));
    };


    const addCartToHTML = () => {
        listCartHTML.innerHTML = '';
        let totalQuantity = 0;
        let sum = 0;

        if (cart.length > 0) {
            cart.forEach(item => {
                totalQuantity += item.quantity;
                let newItem = document.createElement('div');
                newItem.classList.add('item');
                newItem.dataset.id = item.product_id;

                let positionProduct = productsData.findIndex((value) => value.id == item.product_id);
                let info = productsData[positionProduct];
                sum += info.price * item.quantity;
                
                listCartHTML.appendChild(newItem);
                newItem.innerHTML = `
                    <div class="image">
                        <img src="${info.imgSrc}" >
                    </div>
                    <div class="name">
                        ${info.name}
                    </div>
                    <div class="totalPrice">${(info.price * item.quantity).toLocaleString()}</div>
                    <div class="quantity">
                        <span class="minus"><</span>
                        <span>${item.quantity}</span>
                        <span class="plus">></span>
                    </div>
                `;
            });

            iconCartSpan.innerText = totalQuantity;
            cartTotalSpan.innerHTML = `<span>Tổng tiền: ${sum.toLocaleString()} VNĐ</span>`;

        } else {
            iconCartSpan.innerText = 0;
            cartTotalSpan.innerHTML = '<strong>Giỏ hàng trống</strong>';
        }
    };

    listCartHTML.addEventListener('click', (event) => {
        let positionClick = event.target;
        if (positionClick.classList.contains('minus') || positionClick.classList.contains('plus')) {
            let product_id = positionClick.parentElement.parentElement.dataset.id;
            let type = 'minus';
            if (positionClick.classList.contains('plus')) {
                type = 'plus';
            }
            changeQuantityCart(product_id, type);
        }
    });

    const changeQuantityCart = (product_id, type) => {
        let positionItemInCart = cart.findIndex((value) => value.product_id == product_id);

        if (positionItemInCart >= 0) {
            switch (type) {
                case 'plus':
                    cart[positionItemInCart].quantity = cart[positionItemInCart].quantity + 1;
                    break;
        
                default:
                    let changeQuantity = cart[positionItemInCart].quantity - 1;
                    if (changeQuantity > 0) {
                        cart[positionItemInCart].quantity = changeQuantity;
                    } else {
                        cart.splice(positionItemInCart, 1);
                    }
                    break;
            }
        }

        addCartToHTML();
        addCartToMemory();
    };   




    // PAGINATION
    const itemsPerPage = 6;
    let currentPage = 1;
    let currentCategory = '';
    let currentSortOrder = ''; 

   

    function displayProductsByCategory(categoryId) {
        currentCategory = categoryId;
        currentPage = 1;
        displayProductsOnPage(currentPage);
        generatePagination();
    }

    function displayProductsOnPage(pageNumber) {
        const startIndex = (pageNumber - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const sortedProducts = sortProducts(productsData, currentSortOrder);
        const productsToDisplay = sortedProducts.filter(product => {
            return currentCategory === '' || product.category === currentCategory || product.categoryName === currentCategory;
        }).slice(startIndex, endIndex);
        
        displayProducts(productsToDisplay);
    }

    function displayProducts(products) {
        productContainer.innerHTML = '';
        products.forEach(product => {
            productElement = createProductElement(product);
            productContainer.appendChild(productElement);
        });
    }

    
    function generatePagination() {
        const totalItems = productsData.filter(product => {
            return currentCategory === '' || product.category === currentCategory || product.categoryName === currentCategory;
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
            });

            li.appendChild(a);
            paginationContainer.appendChild(li);
        }

        highlightCurrentPage();
    }

    function highlightCurrentPage() {
        const paginationLinks = document.querySelectorAll('.pagination a');
        paginationLinks.forEach(link => {
            link.classList.remove('active');
            if (parseInt(link.textContent) === currentPage) {
                link.classList.add('active');
            }
        });
    }

    menuButtons.forEach(button => {
        button.addEventListener('click', function (event) {
            if (event.target) {
                displayProductsByCategory(event.target.innerText.trim());
            }
        });
    });

    document.getElementById('all').addEventListener('click', function (event) {
        if (event.target) {
            displayProductsByCategory('');
        }
    });

    document.querySelectorAll('.list-items').forEach(list => {
        list.addEventListener('click', function (event) {
            if (event.target.tagName === 'LI') {
                const selectedCategory = event.target.innerText.trim();
                displayProductsByCategory(selectedCategory);
            }
        });
    });

    function sortProductsByPrice(order) {
        currentSortOrder = order; 
        currentPage = 1;
        displayProductsOnPage(currentPage);
        generatePagination();
    }

    function sortProducts(products, order) {
        const sortedProducts = [...products];
        sortedProducts.sort((a, b) => {
            return order === "Giảm dần" ? b.price - a.price : a.price - b.price;
        });
        return sortedProducts;
    }

    sortSelect.addEventListener('change', function () {
        const selectedOption = this.value;
        if (selectedOption === "Sắp xếp") {
            currentSortOrder = ''; 
        } else if (selectedOption === "Giảm dần" || selectedOption === "Tăng dần") {
            sortProductsByPrice(selectedOption);
        }
    });

    if (!currentCategory && currentPage === 1) {
        displayProductsOnPage(currentPage);
        generatePagination();
    }
    if(localStorage.getItem("category")){
        categoryId = localStorage.getItem("category")
        displayProductsByCategory(categoryId)
        localStorage.removeItem('category')
    }
    else{
    displayProductsByCategory('');}
   





});






