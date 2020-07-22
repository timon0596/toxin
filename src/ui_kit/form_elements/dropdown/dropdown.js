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
		this.display = this.dd.find('.js-dropdown-display')
		this.guest = this.dd.hasClass('js-guest-dropdown')
		this.clear = this.dd.find('.js-dropdown-menu__clear')
		this.apply = this.dd.find('.js-dropdown-menu__apply')
		this.dec = this.guest?declensions.guest:declensions.bed
		this.ddmenu = this.dd.find('.js-dropdown-menu')
		this.minus = [...dd.find('.js-minus')].map(m=>$(m))
		this.plus = [...dd.find('.js-plus')].map(m=>$(m))
		this.$values = [...dd.find('.js-value')].map(m=>$(m))
		this.values = this.$values.map(q=>+q.html())
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
		let ind = str.indexOf('dropdown_active')
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
		this.dd.toggleClass('dropdown_active')
		this.ddmenu.slideToggle(250)
	}
	render(){
		let sum = this.values.reduce((accumulator, currentValue) => accumulator + currentValue)
		sum == 0?this.clear.css('opacity',0):this.clear.css('opacity',1)
		this.$values.forEach((el,i)=>{
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
		this.minus[i].addClass('counter-button_disabled'):this.minus[i].hasClass('counter-button_disabled')?
		this.minus[i].removeClass('counter-button_disabled'):0
	}
}
$('.dropdown').each((i,el)=>{
	new Dropdown($(el),i)
})