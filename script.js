const initialBooks=[
 {id:1,title:'Clean Code',author:'Robert C. Martin',isbn:'9780132350884',status:'available'},
 {id:2,title:'The Pragmatic Programmer',author:'Andrew Hunt',isbn:'9780135957059',status:'issued'},
 {id:3,title:'Computer Networks',author:'Andrew S. Tanenbaum',isbn:'9780132126953',status:'available'},
 {id:4,title:'Database System Concepts',author:'Abraham Silberschatz',isbn:'9780073523323',status:'available'}
];
const initialMembers=[
 {id:101,name:'Rahul Sharma',email:'rahul@example.com',issued:1},
 {id:102,name:'Priya Verma',email:'priya@example.com',issued:0},
 {id:103,name:'Aman Gupta',email:'aman@example.com',issued:0}
];
let books=JSON.parse(localStorage.getItem('lms_books'))||initialBooks;
let members=JSON.parse(localStorage.getItem('lms_members'))||initialMembers;
const $=id=>document.getElementById(id);
function save(){localStorage.setItem('lms_books',JSON.stringify(books));localStorage.setItem('lms_members',JSON.stringify(members));}
function render(){
 $('totalBooks').textContent=books.length;$('availableBooks').textContent=books.filter(b=>b.status==='available').length;$('issuedBooks').textContent=books.filter(b=>b.status==='issued').length;$('totalMembers').textContent=members.length;
 const q=$('searchInput').value.toLowerCase(), filter=$('statusFilter').value;
 const list=books.filter(b=>(filter==='all'||b.status===filter)&&`${b.title} ${b.author} ${b.isbn}`.toLowerCase().includes(q));
 $('bookTable').innerHTML=list.length?list.map(b=>`<tr><td><strong>${escapeHtml(b.title)}</strong></td><td>${escapeHtml(b.author)}</td><td>${b.isbn}</td><td><span class="badge ${b.status}">${b.status[0].toUpperCase()+b.status.slice(1)}</span></td><td><div class="actions"><button class="${b.status==='available'?'success':'secondary'}" onclick="toggleBook(${b.id})">${b.status==='available'?'Issue':'Return'}</button><button class="danger" onclick="deleteBook(${b.id})">Delete</button></div></td></tr>`).join(''):`<tr><td colspan="5" class="empty">No books found.</td></tr>`;
 $('memberTable').innerHTML=members.length?members.map(m=>`<tr><td><strong>${escapeHtml(m.name)}</strong></td><td>${escapeHtml(m.email)}</td><td>MEM-${m.id}</td><td>${m.issued}</td><td><button class="danger" onclick="deleteMember(${m.id})">Delete</button></td></tr>`).join(''):`<tr><td colspan="5" class="empty">No members found.</td></tr>`;
}
function escapeHtml(s){return String(s).replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));}
function openModal(type){$('modalTitle').textContent=type==='book'?'Add Book':'Add Member';$('modalForm').innerHTML=type==='book'?`<div class="form-group"><label>Title</label><input name="title" required></div><div class="form-group"><label>Author</label><input name="author" required></div><div class="form-group"><label>ISBN</label><input name="isbn" required pattern="[0-9-]{10,17}"></div><button class="primary form-submit">Add Book</button>`:`<div class="form-group"><label>Name</label><input name="name" required></div><div class="form-group"><label>Email</label><input name="email" type="email" required></div><button class="primary form-submit">Add Member</button>`;$('modal').classList.remove('hidden');$('modalForm').dataset.type=type;}
$('modalForm').addEventListener('submit',e=>{e.preventDefault();const data=Object.fromEntries(new FormData(e.target));if(e.target.dataset.type==='book'){books.push({id:Date.now(),title:data.title.trim(),author:data.author.trim(),isbn:data.isbn.trim(),status:'available'});}else{members.push({id:Date.now(),name:data.name.trim(),email:data.email.trim(),issued:0});}save();render();$('modal').classList.add('hidden');});
$('addBookBtn').onclick=()=>openModal('book');$('addMemberBtn').onclick=()=>openModal('member');$('closeModal').onclick=()=>$('modal').classList.add('hidden');$('modal').onclick=e=>{if(e.target===$('modal'))$('modal').classList.add('hidden')};$('searchInput').oninput=render;$('statusFilter').onchange=render;
window.toggleBook=id=>{const b=books.find(x=>x.id===id);if(!b)return;b.status=b.status==='available'?'issued':'available';save();render()};
window.deleteBook=id=>{if(confirm('Delete this book?')){books=books.filter(b=>b.id!==id);save();render()}};
window.deleteMember=id=>{if(confirm('Delete this member?')){members=members.filter(m=>m.id!==id);save();render()}};
render();
