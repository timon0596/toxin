const declensions = {
	bed: [
		['спальня','спальни','спален'],
		['кровать','кровати','кроватей'],
		['ванная','ванных','ванных']
	],
	guest: [
		['гость','гостя','гостей'],
		['младенец','младенца','младенцев']
	]
}
export class Dropdown{
	
	constructor(dd,index){
		this.index=index
		this.text=''
		this.dd=dd
		this.lcKey=this.getLcKey()
		this.display = this.dd.find('.form-element:first-child')
		this.guest = this.dd.hasClass('guest-dropdown')
		this.clear = this.dd.find('.clear')
		this.apply = this.dd.find('.apply')
		this.dec = this.guest?declensions.guest:declensions.bed
		this.ddmenu = this.dd.find('.dropdown-menu')
		this.minus = [...dd.find('.minus')].map(m=>$(m))
		this.plus = [...dd.find('.plus')].map(m=>$(m))
		this.value = [...dd.find('.value')].map(m=>$(m))
		this.values = this.value.map(q=>+q.html())
		this.dd.find('i').click(this.toggle.bind(this))
		this.init()

		this.minus.forEach((el,i)=>{
			el.click(this.minusFun.bind(this,i))
		})

		this.plus.forEach((el,i)=>{
			el.click(this.plusFun.bind(this,i))
		})

	}
	getLcKey(){
		let str = this.dd.attr('class').split(' ')
		let ind = str.indexOf('active')
		ind!=-1?
			str.splice(ind,1):0
		return this.index+str.join('')
	}
	guestInit(){
		this.clear.click(()=>{
			this.values.fill(0)
			this.render()
			localStorage.removeItem(this.lcKey)
		})
		this.apply.click(()=>{
			localStorage.setItem(this.lcKey,JSON.stringify(this.values))
			this.toggle()
		})
	}
	init(){
		
		this.values=JSON.parse(localStorage?.getItem(this.lcKey))||this.values
		this.render()
		this.guest?this.guestInit():0
	}
	summary(){
		if(this.guest){
			let sum=[0,0]
			sum[0]=this.values[0]+this.values[1]
			sum[1]=this.values[2]
			this.computeText(sum)
			this.text=this.text==''?'Сколько гостей':this.text
		}
		else{
			this.computeText(this.values)
		}
		this.display.text(this.text)
	}
	computeText(sum){
		let text=''
		sum.forEach((el,i)=>{
			text+=el==0?'':el==1?`${el} ${this.dec[i][0]},`:
			el<5?`${el} ${this.dec[i][1]},`:`${el} ${this.dec[i][2]},`
		})
		this.text = text.substring(0,text.length-1)
	}
	toggle(){
		this.dd.toggleClass('active')
		this.ddmenu.slideToggle(250)
	}
	render(){
		this.value.forEach((el,i)=>{
			el.html(this.values[i])
			this.disableButton(i)
		})
		this.summary()
	}
	minusFun(i){
		this.values[i]--
		this.values[i]=this.values[i]<0?0:this.values[i]
		this.render()
	}
	plusFun(i){
		this.values[i]++
		this.render()
	}
	disableButton(i){
		this.values[i]==0?
		this.minus[i].addClass('disabled'):this.minus[i].hasClass('disabled')?
		this.minus[i].removeClass('disabled'):0
	}
}
$('.dropdown').each((i,el)=>{
	new Dropdown($(el),i)
})